import { combineReducers } from 'redux';

import month from './month';
import auth from './auth';

export const reducers = combineReducers({ month, auth });
