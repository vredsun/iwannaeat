import { combineReducers } from '@reduxjs/toolkit';
import eatsSlice from './eats/reducer';

export const rootReducer = combineReducers({
  eats: eatsSlice.reducer,
});
