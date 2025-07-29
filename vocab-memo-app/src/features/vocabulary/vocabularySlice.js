import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  languages: [], // e.g., ['English', 'Spanish']
  vocab: [],     // e.g., [{ id, native: 'Hello', foreign: 'Hola' }]
};

const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    addLanguage: (state, action) => {
      const lang = action.payload.trim();
      if (!state.languages.includes(lang) && state.languages.length < 2) {
        state.languages.push(lang);
      }
    },
    addVocab: {
      reducer: (state, action) => {
        state.vocab.push(action.payload);
      },
      prepare: (native, foreign) => ({
        payload: {
          id: nanoid(),
          native: native.trim(),
          foreign: foreign.trim(),
        },
      }),
    },
    removeVocab: (state, action) => {
      state.vocab = state.vocab.filter(item => item.id !== action.payload);
    },
    resetVocabulary: () => initialState,
  },
});

export const { addLanguage, addVocab, removeVocab, resetVocabulary } = vocabularySlice.actions;
export default vocabularySlice.reducer;
