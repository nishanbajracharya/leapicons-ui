import * as searchActions from '../actions/searchActions';

export const quoteReducer = (state = {}, { type = undefined, payload }) => {
  switch (type) {
    case searchActions.UPDATE_SEARCH:
      return { query: payload };
    default:
      return state;
  }
};

export default quoteReducer;
