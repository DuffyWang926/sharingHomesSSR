import { combineReducers } from 'redux';

import countersReducer from './reducer';
import headerReducer from './header';
import searchRoomsReducer from './searchRooms';
import detailsReducer from './details';

const rootReducer = combineReducers({
  counters: countersReducer,
  header:headerReducer,
  searchRooms:searchRoomsReducer,
  details:detailsReducer
});

export default rootReducer;