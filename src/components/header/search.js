import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as searchActions from '../../actions/searchActions';

const Search = ({ updateSearch = f => f }) => (
  <form>
    <img class="left header--bottom--icon" src="images/search-icon.svg" alt="Search" />
    <input type="search" class="left form-control" placeholder="Search Icons" onChange={e => updateSearch(e.target.value)}/>
  </form>
  // <label className="search-label">
  //   <input
  //     type="search"
  //     className="search-input"
  //     placeholder="Search"
  //     onChange={e => updateSearch(e.target.value)}
  //   />
  // </label>
);

Search.propTypes = {
  updateSearch: PropTypes.func,
};

export default connect(
  () => ({}),
  dispatch => ({
    updateSearch: query => {
      dispatch(searchActions.updateSearch(query));
    },
  })
)(Search);
