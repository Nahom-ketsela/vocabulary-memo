import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeVocab } from '../features/vocabulary/vocabularySlice';

export default function VocabularyList() {
    const dispatch = useDispatch();
    const vocab = useSelector((state) => state.vocabulary.vocab);
    const languages = useSelector((state) => state.vocabulary.languages);

    if (languages.length < 2) return null;

    return (
        <div className="w-full max-w-md mx-auto p-4 mt-6 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
                Vocabulary List ({languages[0]} → {languages[1]})
            </h2>

            {vocab.length === 0 ? (
                <p className="text-gray-500 text-sm">No vocabulary added yet.</p>
            ) : (
                <ul className="divide-y divide-gray-200">
                    {vocab.map(({ id, native, foreign }) => (
                        <li
                            key={id}
                            className="flex justify-between items-center py-2 text-gray-800"
                        >
                            <div>
                                <span className="font-medium">{native}</span> → <span>{foreign}</span>
                            </div>
                            <button
                                onClick={() => dispatch(removeVocab(id))}
                                className="text-red-500 hover:text-red-700 text-sm"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
