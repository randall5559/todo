import { createStore, applyMiddleware, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducer';
import rootEpic from './epic';


const epicMiddleware = createEpicMiddleware(rootEpic);

const store = ():Store<any> =>
  createStore(rootReducer, applyMiddleware(epicMiddleware));

export default store;
