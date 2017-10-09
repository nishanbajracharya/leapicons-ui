export const LOAD_ICONS = 'LOAD_ICONS';

export const loadIcons = (iconSet = []) => ({
  type: LOAD_ICONS,
  payload: iconSet,
});
