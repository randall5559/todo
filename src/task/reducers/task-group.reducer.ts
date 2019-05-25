import { TaskGroupModel } from "../models";


const initialState: TaskGroupModel[] = [{
    groupId: 1,
    label: 'My Example Group',
    completedTasks: 0,
    totalTasks: 1,
    isCollapsed: true,
    isDeleted: false,
    createAt: new Date(),
    dependencyIds: []
}];


export const taskGroupReducer = (state: TaskGroupModel[] = initialState, action) => {
    let newTaskGroup: TaskGroupModel[] = state.slice(0);

    switch (action.type) {
        case 'LOAD_GROUP_TASKS':
            return newTaskGroup.concat(action.payload);

        case 'ADD_TASK_GROUP':
            if (action.payload !== '' && action.payload !== null) {
                newTaskGroup.push({
                    groupId: (newTaskGroup.length + 1),
                    label: action.payload,
                    completedTasks: 0,
                    totalTasks: 0,
                    isCollapsed: true,
                    isDeleted: false,
                    createAt: new Date(),
                    dependencyIds: []
                });
            }

            return newTaskGroup;

        case 'REMOVE_TASK_GROUP':
            return newTaskGroup
                .filter((group: TaskGroupModel) => group.groupId !== action.payload)
                .map((group: TaskGroupModel, index: number) => {
                    return Object.assign({}, group, {
                        groupId: index + 1
                    });
                });

        case 'TOGGLE_GROUP_TASKS':
            return newTaskGroup.map((group: TaskGroupModel) => {
                if (group.groupId === action.payload) {
                    return Object.assign({}, group, { isCollapsed: !group.isCollapsed });
                }

                return group;
            });

        case 'INCRE_COMPLETED_TASKS':
            return newTaskGroup.map((group: TaskGroupModel) => {
                if (group.groupId === action.payload) {
                    return Object.assign({}, group, {
                        completedTasks: group.completedTasks + 1
                    })
                }

                return group;
            });

        case 'DECRE_COMPLETED_TASKS':
            return newTaskGroup.map((group: TaskGroupModel) => {
                if (group.groupId === action.payload) {
                    return Object.assign({}, group, {
                        completedTasks: group.completedTasks - 1
                    })
                }

                return group;
            });

        case 'ADD_OR_REMOVE_DEPENDENCY':
            const { id, groupId } = action.payload;

            return newTaskGroup.map((group: TaskGroupModel) => {
                if (group.groupId === action.payload.groupId) {
                    return Object.assign({}, group, {
                        dependencyIds: group.dependencyIds.includes(id) ?
                        group.dependencyIds.filter(d => d !== id) :
                        [...group.dependencyIds, id]
                    })
                }

                return group;
            });

        case 'TASKS_EXPAND':
            return newTaskGroup.map((group: TaskGroupModel) => {
                return Object.assign({}, group, { isCollapsed: true });
            });

        case 'TASKS_COLLAPSE':
            return newTaskGroup.map((group: TaskGroupModel) => {
                return Object.assign({}, group, { isCollapsed: false });
            });

        default:
            return state;
    }
};
