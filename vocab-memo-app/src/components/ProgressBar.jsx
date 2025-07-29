import React from 'react';
import { useSelector } from 'react-redux';

export default function ProgressBar() {
    const test = useSelector((state) => state.test);

    // Early return if the test slice or data is missing
    if (!test?.inProgress || !Array.isArray(test.answers) || test.answers.length === 0) return null;

    const { index, answers } = test;
    const percent = Math.round((index / answers.length) * 100);

    return (
        <div className="w-full max-w-md mx-auto mt-4">
            <div className="h-4 w-full bg-gray-300 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${percent}%` }}
                />
            </div>
            <div className="text-sm text-gray-600 text-right mt-1">
                {percent}% completed
            </div>
        </div>
    );
}
