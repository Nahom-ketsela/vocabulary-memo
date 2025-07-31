import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetTest } from '../features/test/testSlice';
import { useNavigate } from 'react-router-dom';

export default function Results() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { answers } = useSelector((state) => state.test);

    if (!answers || answers.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-10">
                No test results to show.
            </div>
        );
    }

    const hits = answers.filter((a) => a.isHit).length;
    const ratio = Math.round((hits / answers.length) * 100);

    const handleReturn = () => {
        dispatch(resetTest());
        navigate('/');
    };

    return (
        <div className="w-full max-w-md mx-auto mt-6 p-4 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold text-green-600">Test Complete!</h2>
            <p className="text-gray-800">Score: {hits} / {answers.length} ({ratio}%)</p>

            <ul className="divide-y divide-gray-200 text-sm">
                {answers.map(({ native, correct, input, isHit }, idx) => (
                    <li key={idx} className="py-2 flex justify-between items-center">
                        <div>
                            <span className="font-medium">{native}</span> → {correct}
                            <br />
                            <span className="text-gray-500">Your answer: {input || '—'}</span>
                        </div>
                        <span className={isHit ? 'text-green-500' : 'text-red-500'}>
                            {isHit ? '✔️' : '❌'}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                onClick={handleReturn}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full"
            >
                Return to Vocabulary
            </button>
        </div>
    );
}
