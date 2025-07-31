import React from 'react';
import LanguageSelector from '../components/LanguageSelector';
import VocabularyForm from '../components/VocabularyForm';
import VocabularyList from '../components/VocabularyList';
import { Link } from 'react-router-dom';

export default function AppHome() {
    return (
        <div className="space-y-6 max-w-xl mx-auto">
            <LanguageSelector />
            <VocabularyForm />
            <VocabularyList />
            <Link to="/test">
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                    Start Test
                </button>
            </Link>
        </div>
    );
}
