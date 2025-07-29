import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLanguage } from '../features/vocabulary/vocabularySlice';

export default function LanguageSelector() {
    const dispatch = useDispatch();
    const languages = useSelector((state) => state.vocabulary.languages);
    const [input, setInput] = useState('');

    const handleAddLanguage = () => {
        if (input.trim() && languages.length < 2) {
            dispatch(addLanguage(input));
            setInput('');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Select Your Languages</h2>

            <div className="flex items-center gap-2">
                <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                    placeholder="Enter a language (e.g., English)"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={handleAddLanguage}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    disabled={languages.length >= 2}
                >
                    Add
                </button>
            </div>

            <div>
                <p className="text-sm text-gray-600">Languages Selected:</p>
                <ul className="list-disc ml-5 text-gray-800">
                    {languages.map((lang, idx) => (
                        <li key={idx}>{lang}</li>
                    ))}
                </ul>
                {languages.length < 2 && (
                    <p className="text-red-500 text-sm mt-2">You need to add 2 languages.</p>
                )}
            </div>
        </div>
    );
}
