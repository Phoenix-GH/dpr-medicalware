import { combineReducers } from 'redux';
import signUp from './signup'
import appointments from './appointments'
import geolocation from './geolocation'
import viewport from './viewport'
import users from './users'
import locations from './locations';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<any>({
  form: formReducer as any,
  routing: routerReducer as any,
  signUp,
  appointments,
  geolocation,
  viewport,
  users,
  locations,
});
