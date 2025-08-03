import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar() {
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log('Navbar is rendering...');
    console.log('User:', user);


    const handleLogout = async () => {
        await signOut(auth);
        navigate('/'); // redirect after logout
    };

    return (
        <nav className="bg-white shadow">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600">
                    VocabMemo
                </Link>

                <div className="space-x-4 text-sm text-gray-700 flex items-center">
                    <Link to="/app" className="hover:text-blue-600">Dashboard</Link>
                    <Link to="/test" className="hover:text-blue-600">Test</Link>
                    <Link to="/results" className="hover:text-blue-600">Results</Link>

                    {user ? (
                        <>
                            <span className="text-gray-600 hidden sm:inline">Hello, {user.email.split('@')[0]}</span>
                            <button
                                onClick={handleLogout}
                                className="text-red-500 hover:underline"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/signup" className="hover:text-blue-600">Sign Up</Link>
                            <Link to="/login" className="hover:text-blue-600">Log In</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

