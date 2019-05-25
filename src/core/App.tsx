import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { AppModel } from './models/AppModel';
import { Header } from './components';
import { TaskContainer } from '../task/containers';
import { VoiceContainer } from '../voice/containers'
import './app.css';

import {
  addGroup,
  removeGroup,
  toggleGroupTasksShow,
  loadGroupTasks,
  statusChange,
  removeTask,
  addTask,
  increTaskCount,
  decreTaskCount,
  addRemoveDependency,
  tasksExpand,
  tasksCollapse
} from '../task/actions';
import { voiceOnOff } from '../voice/actions/voice.action';


declare var annyang;
declare var SpeechKITT;


@connect(
  (state) => ({
    tasks: state.taskReducer,
    taskGroups: state.taskGroupReducer,
    isVoiceCmd: state.voiceReducer.isVoiceCmd
  }),
  (dispatch) => ({
    toggleGroup: bindActionCreators(toggleGroupTasksShow, dispatch),
    removeGroup: bindActionCreators(removeGroup, dispatch),
    statusChange: bindActionCreators(statusChange, dispatch),
    removeTask: bindActionCreators(removeTask, dispatch),
    addTask: bindActionCreators(addTask, dispatch),
    addGroup: bindActionCreators(addGroup, dispatch),
    decreTaskCount: bindActionCreators(decreTaskCount, dispatch),
    increTaskCount: bindActionCreators(increTaskCount, dispatch),
    addRemoveDependency: bindActionCreators(addRemoveDependency, dispatch),
    tasksExpand: bindActionCreators(tasksExpand, dispatch),
    tasksCollapse: bindActionCreators(tasksCollapse, dispatch),
    voiceOnOff: bindActionCreators(voiceOnOff, dispatch)
  })
)
class App extends React.Component<AppModel.Props, AppModel.State> {
  render() {
    const {
      tasks,
      taskGroups,
      isCollapsed,
      isVoiceCmd,
      toggleGroup,
      statusChange,
      addTask,
      addGroup,
      removeTask,
      increTaskCount,
      decreTaskCount,
      addRemoveDependency,
      tasksExpand,
      tasksCollapse,
      removeGroup,
      voiceOnOff
    } = this.props;

    return (
      <div className="wrapper">
        <Header />
        <TaskContainer
          tasks={tasks}
          taskGroups={taskGroups}
          isCollapsed={isCollapsed}
          toggleGroup={toggleGroup}
          removeGroup={removeGroup}
          statusChange={statusChange}
          removeTask={removeTask}
          addTask={addTask}
          addGroup={addGroup}
          increTaskCount={increTaskCount}
          decreTaskCount={decreTaskCount}
          addRemoveDependency={addRemoveDependency}
          tasksExpand={tasksExpand}
          tasksCollapse={tasksCollapse}
        />
        <VoiceContainer
          tasks={tasks}
          taskGroups={taskGroups}
          isVoiceCmd={isVoiceCmd}
          speechKITT={SpeechKITT}
          annyang={annyang}
          addTask={addTask}
          addGroup={addGroup}
          removeTask={removeTask}
          addRemoveDependency={addRemoveDependency}
          tasksExpand={tasksExpand}
          tasksCollapse={tasksCollapse}
          removeGroup={removeGroup}
          voiceOnOff={voiceOnOff}
        />
      </div>
    );
  }
}

export default App;
