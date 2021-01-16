import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Router from './_router/router';

import AppContainer from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <AppContainer>
        <Router />
      </AppContainer>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);