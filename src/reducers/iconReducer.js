import * as iconActions from '../actions/iconActions';

export const quoteReducer = (
  state = { selected: {}, set: [] },
  { type = undefined, payload }
) => {
  switch (type) {
    case iconActions.LOAD_ICONS:
      return { ...state, set: payload };
    case iconActions.SET_SELECTED_ICON:
      return { ...state, selected: payload };
    default:
      return state;
  }
};

export default quoteReducer;
