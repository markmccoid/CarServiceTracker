import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';

import './styles/base.css';

import configureStore from './store/configureStore';
import * as authActions from './actions/auth';
import * as serviceActions from './actions/services';
import * as carActions from './actions/cars';
import * as databaseAPI from './database/firebaseAPI';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

import './styles/injectGlobalcss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
//--Check auth state and if logged in set redux login state
//--Then load initial data and redirect to initial page.

firebase.auth().onAuthStateChanged((user) => {
    if (user) { //this will be run once every time the user is logged in or out.
    //--If use is already logged in, make sure to run the login actionTypes
    store.dispatch(authActions.login(user.uid));
    history.push('/dashboard')
    databaseAPI.initializeData(user.uid)
      .then((data) => {
        store.dispatch(carActions.setCars(data.carsArray));
        store.dispatch(serviceActions.setServices(data.servicesArray));
        
        renderApp();
        if (history.location.pathname === '/') {
          history.push('/dashboard');
        }
      });
    renderApp();
  } else {
    store.dispatch(authActions.logout());
    history.push('/');
    renderApp();
  }
});

//ReactDOM.render((<div>hello</div>), document.getElementById('app'));
