import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { User, Users } from '../model';
import {
  USERS_SEARCH,
  USERS_CLEAR,
} from '../../constants/actionsType';

export default handleActions({
  [USERS_SEARCH]: (state, action) => {
    return [...action.payload];
  },
  [USERS_CLEAR]: (state, action) => {
    return [];
  },
}, []);
  