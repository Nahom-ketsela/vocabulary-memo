import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    };

    return (
        <nav className="bg-white shadow-md rounded-b-2xl mx-4 mt-4">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-semibold text-blue-600 tracking-tight hover:opacity-90 transition">
                    VocabMemo
                </Link>

                <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
                    <Link to="/app" className="hover:text-blue-600 transition">Dashboard</Link>
                    <Link to="/test" className="hover:text-blue-600 transition">Test</Link>
                    <Link to="/results" className="hover:text-blue-600 transition">Results</Link>

                    {user ? (
                        <>
                            <span className="text-gray-600 hidden sm:inline">
                                Hello, <span className="font-semibold">{user.email.split('@')[0]}</span>
                            </span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-100 text-red-600 px-3 py-1 rounded-full hover:bg-red-200 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition"
                        >
                            Log In
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
