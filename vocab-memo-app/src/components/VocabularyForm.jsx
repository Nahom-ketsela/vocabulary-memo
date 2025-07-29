import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVocab } from '../features/vocabulary/vocabularySlice';

export default function VocabularyForm() {
    const dispatch = useDispatch();
    const languages = useSelector((state) => state.vocabulary.languages);

    const [nativeWord, setNativeWord] = useState('');
    const [foreignWord, setForeignWord] = useState('');

    const handleAdd = () => {
        if (nativeWord.trim() && foreignWord.trim()) {
            dispatch(addVocab(nativeWord, foreignWord));
            setNativeWord('');
            setForeignWord('');
        }
    };

    if (languages.length < 2) {
        return (
            <div className="text-center text-red-500 mt-4">
                Please select two languages before adding vocabulary.
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto p-4 mt-6 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
                Add Vocabulary ({languages[0]} → {languages[1]})
            </h2>

            <div className="flex flex-col space-y-3">
                <input
                    type="text"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                    placeholder={`Word in ${languages[0]}`}
                    value={nativeWord}
                    onChange={(e) => setNativeWord(e.target.value)}
                />
                <input
                    type="text"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                    placeholder={`Translation in ${languages[1]}`}
                    value={foreignWord}
                    onChange={(e) => setForeignWord(e.target.value)}
                />
                <button
                    onClick={handleAdd}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                    Add Word Pair
                </button>
            </div>
        </div>
    );
}
