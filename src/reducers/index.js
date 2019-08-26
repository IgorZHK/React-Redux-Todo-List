import { combineReducers } from 'redux';

import tasks from './tasks';
import filters from './filters';
import search from './search';

export default combineReducers({ tasks, filters, search });
