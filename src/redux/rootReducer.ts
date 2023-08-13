import { combineReducers } from 'redux';
import { apiReducers } from './apiReducer';
import { reducer as authenticationReducer } from './slices/authentication/AuthenticationSlice';
import { reducer as ModalsReducer } from './slices/modals/modalsSlice';

export const rootReducer = combineReducers({
  auth: authenticationReducer,
  modals: ModalsReducer,
  ...apiReducers,
});
