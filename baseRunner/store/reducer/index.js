import { combineReducers } from 'redux';
import gameReducer from './gameTracker';

const rootReducer = combineReducers({
    gameTracker: gameReducer,
});

export default rootReducer;