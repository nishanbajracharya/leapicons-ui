import 'normalize.css';
import './styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from './store';
import Home from './components/home';

const mountNode = document.getElementById('app-container');

const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    mountNode
  );
};

renderApp(Home);

if (module.hot) {
  module.hot.accept('./components/home', () => {
    renderApp(Home);
  });
}
