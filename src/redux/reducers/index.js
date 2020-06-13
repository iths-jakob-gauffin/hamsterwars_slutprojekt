import { combineReducers } from 'redux';
import { fetchHamstersReducer } from './fetchHamstersReducer';

export default combineReducers({
	hamsters: fetchHamstersReducer
});
