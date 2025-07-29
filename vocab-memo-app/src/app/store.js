import { configureStore } from '@reduxjs/toolkit';
import vocabularyReducer from '../features/vocabulary/vocabularySlice';

export const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
  },
});
// This file sets up the Redux store for the vocabulary memo application,