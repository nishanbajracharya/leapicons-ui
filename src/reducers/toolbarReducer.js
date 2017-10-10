import * as toolbarActions from '../actions/toolbarActions';

export const toolbarReducer = (
  state = { size: 48, openSelection: false },
  { type = undefined, payload }
) => {
  switch (type) {
    case toolbarActions.OPEN_SIZE_SELECTION:
      return { ...state, openSelection: payload };
    case toolbarActions.SET_SIZE:
      return { ...state, size: payload };
    default:
      return state;
  }
};

export default toolbarReducer;
