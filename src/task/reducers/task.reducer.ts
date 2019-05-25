import { TaskGroupModel, TaskStatusEnum, Task } from "../models";


const initialState: Task[] = [{
    id: 1,
    status: TaskStatusEnum.Incomplete,
    label: 'My Example Task',
    isDeleted: false,
    dependencyIds: [],
    completedAt: '',
    groupId: 1,
    isDependency: false
}];


export const taskReducer = (state: Task[] = initialState, action) => {
    let newState = state.slice(0);

    switch (action.type) {
        case 'STATUS_CHANGE':
            return newState.map((task: Task) => {
                if (task.id === action.payload.id) {
                    return Object.assign({}, task, {
                        status: action.payload.status,
                        completedAt: (TaskStatusEnum.Completed === action.payload.status) ?
                            new Date().toString().split(' GMT')[0] : ''
                    });
                }
                return task;
            });
        case 'ADD_TASK':
            if (action.payload.label !== '' && action.payload.label !== null) {
                newState.push({
                    id: (newState.length + 1),
                    status: TaskStatusEnum.Incomplete,
                    label: action.payload.label,
                    isDeleted: false,
                    dependencyIds: [...action.payload.dependencyIds],
                    completedAt: '',
                    groupId: action.payload.groupId,
                    isDependency: false
                });
            }

            return newState;
        case 'REMOVE_TASK':
            return newState.map((task: Task) => {
                if (task.id === action.payload) {
                    return Object.assign({}, task, {
                        isDeleted: true
                    });
                }
                return task;
            });

        case 'ADD_OR_REMOVE_DEPENDENCY':
            newState = newState
                .map((task: Task) => {
                    if (task.id === action.payload.id) {
                        return Object.assign({}, task, {
                            isDependency: !task.isDependency,
                        });
                    }

                    return Object.assign({}, task, {
                        dependencyIds: task.dependencyIds.filter(dep => dep !== action.payload.id)
                    });
                });

            return newState;

        case 'REMOVE_TASK_GROUP':
            return newState
                .filter((task: Task) => task.groupId !== action.payload)

        default:
            return state;
    }
};
