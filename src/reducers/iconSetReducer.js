import * as iconActions from '../actions/iconActions';

export const quoteReducer = (
  state = [],
  { type = undefined, payload = [] }
) => {
  switch (type) {
    case iconActions.LOAD_ICONS:
      return payload;
    default:
      return state;
  }
};

export default quoteReducer;
