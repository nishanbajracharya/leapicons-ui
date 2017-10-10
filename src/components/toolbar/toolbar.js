import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sizes } from '../../constants/icons';
import { getPNGIcon } from '../../utils/searchUtil';
import * as iconActions from '../../actions/iconActions';
import * as toolbarActions from '../../actions/toolbarActions';

const Toolbar = ({
  toolbar = {},
  selected = {},
  setSize = f => f,
  clearSelectedIcon = f => f,
  openSizeSelection = f => f,
}) => (
  <div className={`toolbar-container ${selected.name ? 'active' : ''}`}>
    <div className="toolbar clearfix">
      <span className="icon-name">
        <img
          src={selected.name && getPNGIcon(selected.png, 32)}
          alt={selected.name}
        />
        <span className="name">{selected.name}</span>
      </span>
      <span className="icon-size">
        <span className="value" onClick={() => openSizeSelection(true)}>
          {toolbar.size}px &#9662;
        </span>
        {toolbar.openSelection && (
          <ul className="size-selection">
            {sizes.map((size, i) => (
              <li key={i} onClick={() => setSize(size)}>
                {size}px
              </li>
            ))}
          </ul>
        )}
      </span>
      <div className="right-toolbars">
        <a download href={selected.svg} className="img-download">
          &#11015; SVG
        </a>

        <a
          className="img-download"
          href={getPNGIcon(selected.png, toolbar.size)}
          download={`${selected.name}-${toolbar.size}x${toolbar.size}`}
        >
          &#11015; PNG
        </a>
      </div>

      <button className="close-icon" onClick={() => clearSelectedIcon()}>
        &#x2715;
      </button>
    </div>
  </div>
);

Toolbar.propTypes = {
  setSize: PropTypes.func,
  toolbar: PropTypes.object,
  selected: PropTypes.object,
  clearSelectedIcon: PropTypes.func,
  openSizeSelection: PropTypes.func,
};

export default connect(
  state => ({
    toolbar: state.toolbar,
    selected: state.icons && state.icons.selected,
  }),
  dispatch => ({
    clearSelectedIcon: () => {
      dispatch(iconActions.setSelectedIcon({}));
    },
    openSizeSelection: open => {
      dispatch(toolbarActions.openSizeSelection(open));
    },
    setSize: size => {
      dispatch(toolbarActions.setSize(size));
      dispatch(toolbarActions.openSizeSelection(false));
    },
  })
)(Toolbar);
