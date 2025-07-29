    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
    index: 0,
    answers: [], // { native, correct, input, isHit }
    inProgress: false,
    };

    const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        startTest(state, action) {
        const vocab = action.payload;
        state.answers = vocab.map(({ native, foreign }) => ({
            native,
            correct: foreign,
            input: '',
            isHit: false,
        }));
        state.index = 0;
        state.inProgress = true;
        },
        submitAnswer(state, action) {
        const userInput = action.payload.trim();
        const current = state.answers[state.index];
        current.input = userInput;
        current.isHit = current.correct.toLowerCase() === userInput.toLowerCase();
        state.index += 1;
        },
        resetTest() {
        return initialState;
        },
    },
    });

    export const { startTest, submitAnswer, resetTest } = testSlice.actions;
    export default testSlice.reducer;
