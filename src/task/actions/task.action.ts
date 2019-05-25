import { createAction } from 'redux-actions';

export const statusChange = createAction<any>('STATUS_CHANGE');
export const addTask = createAction<any>('ADD_TASK');
export const removeTask = createAction<any>('REMOVE_TASK');
export const addRemoveDependency = createAction<any>('ADD_OR_REMOVE_DEPENDENCY');