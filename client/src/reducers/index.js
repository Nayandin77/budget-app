import { combineReducers } from 'redux';

import calender from './month';
import auth from './auth';

export const reducers = combineReducers({ calender, auth });
