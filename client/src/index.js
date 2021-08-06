import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { createTheme, ThemeProvider } from '@material-ui/core';

import { reducers } from './reducers';
import App from './App';
import './index.css';

// Theme for palette
const theme = createTheme({
  palette: {
    flower1: {
      main: '#264e2c'
    },
    flower2: {
      main: '#55761a'
    },
    flower3: {
      main: '#9db33e'
    },
    flower4: {
      main: '#dfe49b'
    },
    flower5: {
      main: '#f6f7cd'
    },
  }
});

// lodash
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return {};
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

const persistedState = loadState();

const store = createStore(reducers, persistedState, compose(applyMiddleware(thunk)));

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
