import { combineReducers } from 'redux';
import isLogged from './AuthReducer';
import counter from './CounterReducer';
const rootReducers = combineReducers({
    isLogged: isLogged, counter: counter
});

export default rootReducers;