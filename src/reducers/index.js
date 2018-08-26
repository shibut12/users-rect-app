import {combineReducers} from 'redux';
import UserReducer from './users-reducer';

const allReducers = combineReducers({
    users: UserReducer
})

export default allReducers;