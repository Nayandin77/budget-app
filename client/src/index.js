import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@material-ui/core';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

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
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
