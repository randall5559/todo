import * as React from 'react';

import { TaskGroupModel, TaskModel } from '../../models';
import './task-group.css';


export const TaskGroup = (props: any) => {
    // destruct vars
    const {
        groupId,
        label,
        completedTasks,
        totalTasks,
        isCollapsed,
    } =  props.group;

    // destruct methods
    const {
        toggleGroup,
        removeGroup
    } = props;

    const children = (isCollapsed) ? props.children: null;

    return(
        <div className="task-group-wrapper">
            <div className={ groupId > 1 ? 'task-group-header border': 'task-group-header' }>
                <button
                    onClick={() => {
                        toggleGroup(groupId);
                    }}
                    className="task-group-button"
                >
                    <img
                        className={ children ? 'task-group-arrow task-group-expanded' : 'task-group-arrow'}
                        src={'../assets/group.svg'} />
                </button>
                <div className="task-group-label">
                    <div className="task-group-title">
                        { groupId } - { label }
                    </div>
                    <div className="task-group-of-complete">
                        { completedTasks } OF { totalTasks } TASK COMPLETED
                    </div>
                </div>
                <button
                    onClick={() => {
                        removeGroup(groupId);
                    }}
                    className="task-group-button"
                >
                    <img src={'../assets/delete.svg'} />
                </button>
            </div>
            { children }
        </div>
    );
};
