import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPNGIcon } from '../../utils/searchUtil';
import * as iconActions from '../../actions/iconActions';

const Icon = ({ icon = {}, selected = {}, setSelectedIcon = f => f }) => (
  <div
    className={`icon ${selected.name === icon.name ? 'selected' : ''}`}
    onClick={() => setSelectedIcon(selected.name === icon.name ? {} : icon)}
  >
    <div>
      <img src={getPNGIcon(icon.png, 48)} alt={icon.name} />
    </div>
    {icon.name}
  </div>
);

Icon.propTypes = {
  icon: PropTypes.object,
  selected: PropTypes.object,
  setSelectedIcon: PropTypes.func,
};

export default connect(
  state => ({ selected: state.icons && state.icons.selected }),
  dispatch => ({
    setSelectedIcon: icon => {
      dispatch(iconActions.setSelectedIcon(icon));
    },
  })
)(Icon);
