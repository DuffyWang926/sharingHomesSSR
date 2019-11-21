import { combineReducers } from 'redux';

import countersReducer from './reducer';
import headerReducer from './header';

const rootReducer = combineReducers({
  counters: countersReducer,
  header:headerReducer
});

export default rootReducer;