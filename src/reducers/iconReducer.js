import * as iconActions from '../actions/iconActions';

export const quoteReducer = (state = {}, { type = undefined, payload }) => {
  switch (type) {
    case iconActions.LOAD_ICONS:
      return { ...state, set: payload };
    default:
      return state;
  }
};

export default quoteReducer;
