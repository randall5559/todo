import { combineReducers } from 'redux';
import { taskReducer, taskGroupReducer } from '../task/reducers';
import { voiceReducer } from '../voice/reducers/voice.reducer';

const rootReducer = combineReducers({
  taskReducer,
  taskGroupReducer,
  voiceReducer
});

export default rootReducer;
