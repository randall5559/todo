import { TaskGroupModel } from "./task-group.interface";

export type TaskGroupType = {
    type: string;
    payload: TaskGroupModel | TaskGroupModel[];
};