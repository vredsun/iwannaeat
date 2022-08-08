import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { migrations } from './migrations';
import { rootReducer } from './reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['eats'],
  migrate: createMigrate(migrations, { debug: false }),
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    if (process.env.NODE_ENV === 'development') {
      // return getDefaultMiddleware().concat(logger);
    }

    return getDefaultMiddleware();
  },
});
export const persistor = persistStore(store)

// @ts-expect-error dev
window.store = store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export type RootState = ReturnType<typeof store.getState>;

export default store;
