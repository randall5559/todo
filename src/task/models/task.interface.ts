export interface Task {
    id: number,
    status: number;
    label: string;
    isDeleted: boolean;
    dependencyIds: Array<number>;
    completedAt: string;
    groupId: number;
    isDependency: boolean;
}