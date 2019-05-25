import { createAction } from 'redux-actions';

export const addGroup = createAction<any>('ADD_TASK_GROUP');
export const removeGroup = createAction<any>('REMOVE_TASK_GROUP');
export const toggleGroupTasksShow = createAction<any>('TOGGLE_GROUP_TASKS');
export const loadGroupTasks = createAction<any>('LOAD_GROUP_TASKS');
export const increTaskCount = createAction<any>('INCRE_COMPLETED_TASKS');
export const decreTaskCount = createAction<any>('DECRE_COMPLETED_TASKS');
