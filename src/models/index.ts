import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { rootReducer } from './reducer';
// import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (process.env.NODE_ENV === 'development') {
      // return getDefaultMiddleware().concat(logger);
    }

    return getDefaultMiddleware();
  },
});
// @ts-expect-error dev
window.store = store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export type RootState = ReturnType<typeof store.getState>;

export default store;
