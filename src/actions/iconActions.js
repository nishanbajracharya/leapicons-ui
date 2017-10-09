export const LOAD_ICONS = 'LOAD_ICONS';
export const SET_SELECTED_ICON = 'SET_SELECTED_ICON';

export const loadIcons = (iconSet = []) => ({
  type: LOAD_ICONS,
  payload: iconSet,
});

export const setSelectedIcon = (icon = {}) => ({
  type: SET_SELECTED_ICON,
  payload: icon,
});
