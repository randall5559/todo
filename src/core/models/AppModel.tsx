import { RouteComponentProps } from 'react-router';

export namespace AppModel {
    export interface Props extends RouteComponentProps<void> {
      tasks: Array<any>;
      taskGroups: Array<any>;
      isCollapsed: boolean;
      isVoiceCmd: boolean;
      toggleGroup: Function;
      removeGroup: Function;
      statusChange: Function;
      removeTask: Function;
      addTask: Function;
      addGroup: Function;
      increTaskCount: Function;
      decreTaskCount: Function;
      addRemoveDependency: Function;
      tasksExpand: Function;
      tasksCollapse: Function;
      voiceOnOff: Function;
    }

    export interface State {
      /* empty */
    }
}