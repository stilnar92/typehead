import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';
import { User, Users } from './model';
import { matchedUsers } from './utils'
import {
  USERS_SEARCH,
  USER_TYPE,
  USERS_CLEAR,
} from '../constants/actionsType'



const searchUsers = createAction<Users, string>(
  USERS_SEARCH,
  (username: string) => (matchedUsers(username))
);

const inputUser = createAction<string, string>(
  USER_TYPE,
  (username: string) => username
);

const clearUsers = createAction<void>(
  USERS_CLEAR,
  () => []
);

export {
  searchUsers,
  clearUsers,
  inputUser,
}
