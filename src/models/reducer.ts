import { combineReducers } from '@reduxjs/toolkit';
import addEatSlice from './add-eat/reducer';
import eatsSlice from './eats/reducer';

export const rootReducer = combineReducers({
  eats: eatsSlice.reducer,
  addEat: addEatSlice.reducer,
});
