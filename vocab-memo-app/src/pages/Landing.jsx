import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-purple-100 to-blue-200 flex flex-col ">
            <header className="max-w-6xl mx-auto px-6 py-12 text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
                    Your Vocabulary <span className="text-blue-600">Mastered</span>.
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                    VocabMemo helps you test, track, and retain words across any language pair. Clean interface, deep learning. No fluff.
                </p>
                <Link
                    to="/app"
                    className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 text-lg rounded-full shadow-md hover:bg-blue-700 transition"
                >
                    Get Started
                </Link>
            </header>

            <main className="bg-white rounded-t-3xl shadow-lg px-6 py-12 mt-10">
                <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800">How VocabMemo Works</h2>
                        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
                            <li>Add your own vocabulary between two languages.</li>
                            <li>Take smart adaptive tests that challenge memory and recognition.</li>
                            <li>Get feedback on each response.</li>
                            <li>Track progress over time with your personal test history.</li>
                        </ul>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1722936598143-40ea5da94dfd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Vocabulary app illustration"
                        className="rounded-xl shadow-md w-full object-cover"
                    />
                </section>
            </main>

        </div>
    );
}
