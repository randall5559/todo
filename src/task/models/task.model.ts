import * as React from 'react';

import { TaskGroupModel } from './task-group.interface';
import { Task } from './task.interface';

export namespace TaskModel {
    export interface Props extends React.Props<any> {
        tasks?: Array<Task>;
        taskGroups?: Array<TaskGroupModel>;
        isCollapsed?: boolean;
        isFirstItem?: boolean;
        isDeleted?: boolean;
        toggleGroup?: Function;
        removeGroup?: Function;
        statusChange?: Function;
        removeTask?: Function;
        addTask?: Function;
        addGroup?: Function;
        increTaskCount?: Function;
        decreTaskCount?: Function;
        addRemoveDependency?: Function;
        tasksExpand?: Function;
        tasksCollapse?: Function;
    }

    export interface State {
        /* empty */
    }
}