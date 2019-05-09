import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { StripeProvider } from 'react-stripe-elements';
import configureStore from 'app/store/configure-store';
require('dotenv').config();
import { Router } from 'react-router';
import 'antd/dist/antd.css';
import 'app/style/app.scss';

import {App} from 'app';

// prepare store
const history = createBrowserHistory();
const store = configureStore();

import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <StripeProvider apiKey="pk_test_Gf7paY9Mb4EnlOfNZQktuazu">
    <Provider store={store}>
      <Router history={history} >
        <App/>
      </Router>
    </Provider>
    </StripeProvider>,
  document.getElementById('root')
);

unregister();
