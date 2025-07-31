import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white mt-10 border-t">
            <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500 text-center">
                &copy; {new Date().getFullYear()} VocabMemo. Built for language learners, by language lovers.
            </div>
        </footer>
    );
}
