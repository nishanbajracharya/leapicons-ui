import { combineReducers } from 'redux';

import iconReducer from './iconReducer';
import searchReducer from './searchReducer';
import toolbarReducer from './toolbarReducer';

const appReducer = combineReducers({
  icons: iconReducer,
  search: searchReducer,
  toolbar: toolbarReducer,
});

export default (state, action) => appReducer(state, action);
