import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../header';
import Toolbar from '../toolbar';
import IconContainer from '../iconContainer';
import { iconSet } from '../../constants/icons';
import * as iconActions from '../../actions/iconActions';

const Home = ({ loadIcons = f => f }) => {
  loadIcons();
  return (
    <div>
      <Header />
      <main className="toolbar--open">
        <div className="custom-container">
          <IconContainer />
        </div>
        <Toolbar />
      </main>
    </div>
  );
};

Home.propTypes = {
  loadIcons: PropTypes.func,
};

export default connect(
  () => ({}),
  dispatch => ({
    loadIcons: () => {
      dispatch(iconActions.loadIcons(iconSet));
    },
  })
)(Home);
