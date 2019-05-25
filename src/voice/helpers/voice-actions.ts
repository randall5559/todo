import { TaskGroupModel, Task } from "../../task/models";

/**
 * Replace a string containing a text number with a numerical one
 *
 * @param text
 */
export const replaceTextNumberWithDigit = (text) => {
    let newText = text;

   ['one','two','three','four','five','six','seven','eight','nine','ten'].forEach((txtNum, ix) => {
      if (text.includes(txtNum)) {
        newText = text.replace(txtNum, (ix+1).toString())
      }
   });

   return newText;
}


/**
 * Pull properties from Task Group Model for adding a task via voice
 *
 * @param text
 * @param groups
 */
export const extractGroupDataForAddTask = (text: string, groups: TaskGroupModel[]) => {
  const newTaskLabel = text.split('to group')[0];
  let addTaskProps = null;

  groups.forEach((group: TaskGroupModel) => {
      if (text.includes(group.label.toLowerCase()) || text.includes(group.groupId.toString())) {
        addTaskProps = { dependencyIds: group.dependencyIds, groupId: group.groupId, label: newTaskLabel };
      }
    });

  return addTaskProps
}


/**
 * Pull id from Task model for removing a task
 *
 * @param text
 * @param tasks
 */
export const extractTaskDataForRemoveTask = (text: string, tasks: Task[]) => {
  let removeTaskId = null;

  tasks.forEach((task: Task) => {
      if (text.includes(task.label.toLowerCase())) {
        removeTaskId = task.id;
      }
    });

  return removeTaskId
}



/**
 * Pull group id from Group Task model for removing a group
 *
 * @param text
 * @param tasksGroup
 */
export const extractGroupID_FromTaskGroupModel = (text: string, tasksGroup: TaskGroupModel[]) => {
  let groupId = null;

  tasksGroup.forEach((group: TaskGroupModel) => {
      if (text.includes(group.groupId.toString())) {
        groupId = group.groupId;
      }
    });

  return groupId;
}