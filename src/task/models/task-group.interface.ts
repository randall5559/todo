export interface TaskGroupModel {
    id?: number;
    groupId: number | null,
    label: string;
    completedTasks: number;
    totalTasks: number;
    isCollapsed: boolean;
    isDeleted: boolean;
    createAt: Date;
    dependencyIds: Array<number>
}