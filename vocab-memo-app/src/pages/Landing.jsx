import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col justify-between">
            <div className="max-w-4xl mx-auto p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to VocabMemo</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Learn vocabulary the clean way. Add language pairs, test yourself, track your progress.
                </p>
                <Link to="/app" className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Get Started
                </Link>
            </div>
        </div>
    );
}
