import { combineReducers } from 'redux';

import users from '../typehead/reducers/users';
import user from '../typehead/reducers/user';
const rootReducer = combineReducers({
  user,
  users,
});

export default rootReducer;
