import { createAction } from 'redux-actions';

export const tasksExpand = createAction<any>('TASKS_EXPAND');
export const tasksCollapse = createAction<any>('TASKS_COLLAPSE');