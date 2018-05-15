import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPNGIcon } from '../../utils/searchUtil';
import * as iconActions from '../../actions/iconActions';

const Icon = ({ icon = {}, selected = {}, setSelectedIcon = f => f }) => (
  <li
    className={`icon ${selected.name === icon.name ? 'selected' : ''}`}
    onClick={() => setSelectedIcon(selected.name === icon.name ? {} : icon)}
  >
    <div className="icon-wrapper">
      {/* <img src={icon.svg} alt={icon.name} /> */}
      <span dangerouslySetInnerHTML={{__html: icon.svgElement || ''}
       } />
    </div>
    <div className="icon-label">
      {icon.name}
    </div>
    <div>
       <button>Download</button>
       <button>Add</button>
    </div>
  </li>
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
