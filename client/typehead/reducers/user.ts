import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { User, Users } from '../model';
import {
  USER_TYPE
} from '../../constants/actionsType';

export default handleActions({
  [USER_TYPE]: (state, action) => {
    return action.payload;
  },


}, []);
  