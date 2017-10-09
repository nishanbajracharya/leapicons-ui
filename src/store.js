import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const initialStore = {};

const store = createStore(reducer, initialStore, composeWithDevTools());

export default store;
