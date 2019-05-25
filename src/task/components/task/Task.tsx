import * as React from 'react';

import {
    TaskModel,
    Task as ITask,
    TaskStatusEnum } from '../../models';
import './task.css';

export const Task = (props: any) => {
    const {
        id,
        label,
        status,
        isDeleted,
        dependencyIds,
        completedAt,
        isDependency
    }: ITask = props.task;

    const {
        groupId,
        statusChange,
        removeTask,
        increTaskCount,
        decreTaskCount,
        addRemoveDependency
    } = props;

    const dateTime = completedAt === '' ? '' : `(Completed at - ${completedAt})`;
    const checkImg = isDependency ? 'marked' : 'default';
    const statusImg = dependencyIds.length > 0 ? TaskStatusEnum[TaskStatusEnum.Locked] : TaskStatusEnum[status];

    return(
        <div className="task-wrapper">
            <button
                onClick={() => {
                    if (status === TaskStatusEnum.Completed) {
                        statusChange({ id: id, status: TaskStatusEnum.Incomplete });
                        decreTaskCount(groupId);
                    } else if (status === TaskStatusEnum.Incomplete) {
                        statusChange({ id: id, status: TaskStatusEnum.Completed });
                        increTaskCount(groupId);
                        if (isDependency) {
                            addRemoveDependency({ id: id, groupId: groupId});
                        }
                    }
                }}
                disabled={status === TaskStatusEnum.Locked ? true : false}
                className="task-status-button"
            >
                <img className={`task-img task-${statusImg.toLowerCase()}`} src={`../assets/${statusImg}.svg`} />
            </button>
            <span className={
                (status === TaskStatusEnum.Completed) ?
                    'task-label task-striked' : 'task-label'
             }>
                {label}
            </span>
            <span className="task-completed">{dateTime}</span>
            <button
                onClick={() => {
                    addRemoveDependency({ id: id, groupId: groupId});
                }}
                className="task-check-button"
            >
                <img className="task-img" src={`../assets/checked-${checkImg}.svg`} />
            </button>
            <button
                onClick={() => {
                    removeTask(id);
                }}
                className="task-remove-button"
            >
                <img className="task-img" src={'../assets/rounded-remove-button.svg'} />
            </button>
        </div>
    )
}
