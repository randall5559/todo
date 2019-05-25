export const taskGroupEpic = action$ =>
  action$.ofType('LOAD_GROUP_TASKS').mapTo({
    type: 'LOAD_GROUP_TASKS_COMPELTED'
  });
