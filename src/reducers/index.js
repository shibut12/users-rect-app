import {combineReducers} from 'redux';
import UserReducer from './users-reducer';
import ActiveuserReducer from './active-user-reducer';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveuserReducer
})

export default allReducers;