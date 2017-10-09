import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import iconReducer from './iconReducer';

const appReducer = combineReducers({
  icons: iconReducer,
  search: searchReducer,
});

export default (state, action) => appReducer(state, action);
