import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../favoritesSlice';
import { apiSlice } from '../services/api';

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
