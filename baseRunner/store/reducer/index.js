import { combineReducers } from 'redux';
import gameReducer from './gameTracker';

const rootReducer = combineReducers({
  gameReducer,
});

export default rootReducer;
