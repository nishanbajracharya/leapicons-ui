import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import iconSetReducer from './iconSetReducer';

const appReducer = combineReducers({
  search: searchReducer,
  iconSet: iconSetReducer,
});

export default (state, action) => appReducer(state, action);
