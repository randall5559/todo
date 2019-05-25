import * as React from 'react';

import './task-expand-collapse.css';

export const TaskExpandCollapse = (props) => (
    <div className="task-expand-collapse-wrapper">
        <a onClick={props.tasksExpand}>expand all</a>
        <span>/</span>
        <a onClick={props.tasksCollapse}>collapse all</a>
    </div>
);
