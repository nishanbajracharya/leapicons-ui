import React from 'react';
import { connect } from 'react-redux';

import * as searchActions from '../../actions/searchActions';

const Search = ({ updateSearch = f => f }) => (
  <label className="search-label">
    <input
      type="search"
      className="search-input"
      placeholder="Search"
      onChange={e => updateSearch(e.target.value)}
    />
  </label>
);

export default connect(
  state => ({
    search: state.search,
  }),
  dispatch => ({
    updateSearch: query => {
      dispatch(searchActions.updateSearch(query));
    },
  })
)(Search);
