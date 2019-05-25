import * as React from 'react';

import {
  VoiceBox,
  VoiceHeader,
  VoiceContent
 } from '../components';
import { VoiceModel } from '../models/voice.model';
import {
  Task,
  TaskGroupModel
} from '../../task/models';
import * as util from '../helpers/voice-actions';
import { VOICE } from '../constants/voice.constant';
import { TaskGroup } from '../../task/components';
import { voiceOnOff } from '../actions/voice.action';
import './voice-container.css';



export class VoiceContainer extends React.Component<VoiceModel.Props, VoiceModel.State> {

  constructor(props?: VoiceModel.Props, context?: any) {
    super(props, context);
  }


  /**
   * LifeCycle Hook: when component mounts
   *
   * @memberof VoiceContainer
   */
  public componentDidMount() {
    const { speechKITT, annyang, voiceOnOff } = this.props;

    if (annyang) {
      // Add our commands to annyang
      annyang.addCommands({
        [ VOICE.COMMANDS.VOICE_CONTROL_ABORT ]: (text => annyang.abort()),
        [ VOICE.COMMANDS.SPEECH_CONTROL_ABORT ]: (text => annyang.abort()),
        [ VOICE.COMMANDS.ADD_TASK ]: (text => this.matchAndDispatch(text, VOICE.ACTIONS.ADD_TASK)),
        [ VOICE.COMMANDS.REMOVE_TASK ]: (text => this.matchAndDispatch(text, VOICE.ACTIONS.REMOVE_TASK)),
        [ VOICE.COMMANDS.EXPAND_ALL ]: (text => this.matchAndDispatch(text, VOICE.ACTIONS.EXPAND_ALL)),
        [ VOICE.COMMANDS.COLLAPSE_ALL ]: (text => this.matchAndDispatch(text, VOICE.ACTIONS.COLLAPSE_ALL)),
        [ VOICE.COMMANDS.OPEN_ALL ]: (text => this.matchAndDispatch(text, VOICE.ACTIONS.EXPAND_ALL)),
        [ VOICE.COMMANDS.CLOSE_ALL ]: (text => this.matchAndDispatch(text, VOICE.ACTIONS.COLLAPSE_ALL)),
        [ VOICE.COMMANDS.ADD_GROUP ]: (text => this.matchAndDispatch(text, VOICE.ACTIONS.ADD_GROUP)),
        [ VOICE.COMMANDS.REMOVE_GROUP ]: (text => this.matchAndDispatch(text, VOICE.ACTIONS.REMOVE_GROUP))
      });

      // Tell KITT to use annyang
      speechKITT.annyang();

      // Add default title
      speechKITT.setInstructionsText(VOICE.INSTRUCTION_TEXT);

      // Define a stylesheet for KITT to use
      speechKITT.setStylesheet(VOICE.SPEECH_STYLES);

      // Render KITT's interface
      speechKITT.vroom();

      // Listen to clicks on SpeechKitt
      document.querySelector('#skitt-toggle-button')
        .addEventListener('click', () => {
          voiceOnOff();
        });
    }
  }


  /**
   * Match the text to the appropriate voice action type
   *
   * @private
   * @param {string} text
   * @param {number} type
   * @memberof VoiceContainer
   */
  private matchAndDispatch(text: string, type: number) {
    const {
      tasks,
      taskGroups,
      addTask,
      addGroup,
      removeTask,
      addRemoveDependency,
      tasksExpand,
      tasksCollapse,
      removeGroup
    } = this.props;
    let saying: string;

    switch(type) {
      case VOICE.ACTIONS.ADD_TASK:
        // add task [NAME_OF_TASK] to group [NAME_OF_GROUP | NUMBER_OF_GROUP]
        saying = util.replaceTextNumberWithDigit(text);
        addTask(util.extractGroupDataForAddTask(saying, taskGroups));
      break;

      case VOICE.ACTIONS.REMOVE_TASK:
        // remove task [NAME_OF_TASK]
        removeTask(util.extractTaskDataForRemoveTask(text, tasks));
      break;

      case VOICE.ACTIONS.EXPAND_ALL:
        tasksExpand();
      break;

      case VOICE.ACTIONS.COLLAPSE_ALL:
        tasksCollapse();
      break;

      case VOICE.ACTIONS.ADD_GROUP:
        addGroup(text);
      break;

      case VOICE.ACTIONS.REMOVE_GROUP:
        saying = util.replaceTextNumberWithDigit(text);
        removeGroup(util.extractGroupID_FromTaskGroupModel(saying, taskGroups));
      break;

    }
  }


  render() {
    const { voiceOnOff, isVoiceCmd, annyang } = this.props;

    if (isVoiceCmd) {
      annyang.start();
    } else if (!isVoiceCmd) {
      annyang.abort();
    }

    return (
      <div className="voice-wrapper">
        <VoiceBox>
          <VoiceHeader voiceOnOff={voiceOnOff} />
          <VoiceContent />
        </VoiceBox>
      </div>
    );
  }
}

