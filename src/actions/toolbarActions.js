export const SET_SIZE = 'SET_SIZE';
export const OPEN_SIZE_SELECTION = 'OPEN_SIZE_SELECTION';

export const setSize = (size = 48) => ({
  type: SET_SIZE,
  payload: size,
});

export const openSizeSelection = (open = false) => ({
  type: OPEN_SIZE_SELECTION,
  payload: open,
});
