import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import carsReducer from '../reducers/cars';
import servicesReducer from '../reducers/services';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      cars: carsReducer,
      services: servicesReducer,
      filters: filtersReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
