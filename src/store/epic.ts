import { combineEpics } from 'redux-observable';
import { taskEpic, taskGroupEpic } from '../task/epics';

const rootEpic = combineEpics(
    taskEpic,
    taskGroupEpic
);

export default rootEpic;
