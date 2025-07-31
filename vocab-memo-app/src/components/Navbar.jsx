import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600">VocabMemo</Link>
                <div className="space-x-4 text-sm text-gray-700">
                    <Link to="/app" className="hover:text-blue-600">Dashboard</Link>
                    <Link to="/test" className="hover:text-blue-600">Test</Link>
                    <Link to="/results" className="hover:text-blue-600">Results</Link>
                </div>
            </div>
        </nav>
    );
}
