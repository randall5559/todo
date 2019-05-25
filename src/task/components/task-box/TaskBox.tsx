import * as React from 'react';

import { TaskModel } from '../../models';
import './task-box.css';

export const TaskBox = (props: TaskModel.Props) => (
    <div className={props.isFirstItem ? 'block no-top-margin' : 'block'}>{ props.children }</div>
);
