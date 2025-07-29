import { configureStore } from '@reduxjs/toolkit';
import vocabularyReducer from '../features/vocabulary/vocabularySlice';
import testReducer from '../features/test/testSlice'; 

export const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
    test: testReducer, 
  },
});
