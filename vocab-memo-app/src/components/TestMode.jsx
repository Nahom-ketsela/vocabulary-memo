import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    startTest,
    submitAnswer,
    resetTest,
} from '../features/test/testSlice';

export default function TestMode() {
    const dispatch = useDispatch();
    const vocab = useSelector((state) => state.vocabulary.vocab);
    const languages = useSelector((state) => state.vocabulary.languages);
    const test = useSelector((state) => state.test);

    const answers = test?.answers ?? [];
    const index = test?.index ?? 0;
    const inProgress = test?.inProgress ?? false;


    const [input, setInput] = useState('');

    const handleStart = () => {
        dispatch(startTest(vocab));
        setInput('');
    };

    const handleSubmit = () => {
        if (!input.trim()) return;
        dispatch(submitAnswer(input));
        setInput('');
    };

    const handleReset = () => {
        dispatch(resetTest());
    };

    if (languages.length < 2 || vocab.length < 5) {
        return (
            <div className="text-center text-sm text-gray-500 mt-4">
                Add at least 2 languages and 5 vocabulary pairs to enable testing.
            </div>
        );
    }

    if (!inProgress) {
        return (
            <div className="w-full max-w-md mx-auto mt-6 text-center">
                <button
                    onClick={handleStart}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                    Start Test
                </button>
            </div>
        );
    }

    if (index >= answers.length) {
        const hits = answers.filter((a) => a.isHit).length;
        const ratio = Math.round((hits / answers.length) * 100);

        return (
            <div className="w-full max-w-md mx-auto mt-6 p-4 bg-white rounded-xl shadow-md space-y-4">
                <h2 className="text-xl font-bold text-green-600">Test Complete!</h2>
                <p className="text-gray-800">Score: {hits} / {answers.length} ({ratio}%)</p>

                <ul className="divide-y divide-gray-200 text-sm">
                    {answers.map(({ native, correct, input, isHit }, idx) => (
                        <li key={idx} className="py-2 flex justify-between items-center">
                            <div>
                                <span className="font-medium">{native}</span> → {correct}
                                <br />
                                <span className="text-gray-500">Your answer: {input || '—'}</span>
                            </div>
                            <span className={isHit ? 'text-green-500' : 'text-red-500'}>
                                {isHit ? '✔️' : '❌'}
                            </span>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={handleReset}
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full"
                >
                    Return to Vocabulary
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto mt-6 p-4 bg-white rounded-xl shadow-md space-y-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Word {index + 1} of {answers.length}</span>
                <span>{languages[0]} → {languages[1]}</span>
            </div>

            <h2 className="text-lg font-bold text-gray-800">
                Translate: <span className="text-blue-600">{answers[index].native}</span>
            </h2>

            <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder={`Enter in ${languages[1]}`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />

            <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Submit
            </button>
        </div>
    );
}
