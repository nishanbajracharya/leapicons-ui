import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPNGIcon } from '../../utils/searchUtil';
import * as iconActions from '../../actions/iconActions';

const Icon = ({ icon = {}, selected = {}, setSelectedIcon = f => f }) => (
  <li
    className={`${selected.name === icon.name ? 'selected' : ''}`}
    onClick={() => setSelectedIcon(selected.name === icon.name ? {} : icon)}
    title={icon.name}
  >
    <div className="icon-wrapper" dangerouslySetInnerHTML={{__html: icon.svgElement || ''}}>
      {/* <img src={icon.svg} alt={icon.name} /> */}
      {/* <span 
       } /> */}
    </div>
    <div className="icon-label">
      {icon.name}
    </div>
    <div className="action-button-list">
       <button className="btn btn__icon">
         <img src="images/download-icon.svg" />
       </button>
       <button className="btn btn__icon">
        <img src="images/add-to-collection-icon.svg" />
       </button>
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
