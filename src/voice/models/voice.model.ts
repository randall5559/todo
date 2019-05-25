export namespace VoiceModel {
    export interface Props {
        tasks: Array<any>;
        taskGroups: Array<any>;
        isVoiceCmd: boolean;
        speechKITT: any;
        annyang: any;
        addTask: Function;
        addGroup: Function;
        removeTask: Function;
        addRemoveDependency: Function;
        tasksExpand: Function;
        tasksCollapse: Function;
        removeGroup: Function;
        voiceOnOff: Function;
    }

    export interface State {
        /* empty */
    }
}