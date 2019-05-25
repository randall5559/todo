export const taskEpic = action$ =>
  action$.ofType('LOAD_TASKS').mapTo({
    type: 'LOAD_TASKS_COMPELTED'
  });
