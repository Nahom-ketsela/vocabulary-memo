import React from 'react';
import TestMode from '../components/TestMode';
import ProgressBar from '../components/ProgressBar';

export default function Test() {
    return (
        <div className="space-y-4 max-w-xl mx-auto">
            <ProgressBar />
            <TestMode />
        </div>
    );
}
