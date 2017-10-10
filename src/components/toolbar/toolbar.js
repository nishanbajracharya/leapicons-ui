import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPNGIcon } from '../../utils/searchUtil';
import * as iconActions from '../../actions/iconActions';

const Toolbar = ({ selected = {}, clearSelectedIcon = f => f }) => {
  return (
    <div className={`toolbar-container ${selected.name ? 'active' : ''}`}>
      <div className="toolbar clearfix">
        <span className="icon-name">{selected.name}</span>
        <button className="close-icon" onClick={() => clearSelectedIcon()}>
          Clear
        </button>
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  selected: PropTypes.object,
  clearSelectedIcon: PropTypes.func,
};

export default connect(
  state => ({
    selected: state.icons && state.icons.selected,
  }),
  dispatch => ({
    clearSelectedIcon: () => {
      dispatch(iconActions.setSelectedIcon({}));
    },
  })
)(Toolbar);
