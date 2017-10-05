import '../public/css/reset.css';
import './styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Home from './components/home';

const mountNode = document.getElementById('app-container');

const renderApp = () => {
  render(
    <AppContainer>
      <Home />
    </AppContainer>,
    mountNode
  );
};

renderApp();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/home', () => renderApp());
}
