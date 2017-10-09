export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export const updateSearch = (query = '') => ({
  type: UPDATE_SEARCH,
  payload: query,
});
