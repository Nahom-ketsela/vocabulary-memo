import React, { useEffect, useState } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

export default function Results() {
    const { user } = useAuth();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const fetchResults = async () => {
            try {
                const q = query(
                    collection(db, 'results'),
                    where('uid', '==', user.uid),
                    orderBy('timestamp', 'desc')
                );

                const snapshot = await getDocs(q);
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setResults(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching results:', err);
            }
        };

        fetchResults();
    }, [user]);

    if (loading) {
        return (
            <div className="text-center mt-10 text-gray-500">
                Loading your results...
            </div>
        );
    }

    if (results.length === 0) {
        return (
            <div className="text-center mt-10 text-gray-500">
                You haven't completed any tests yet.
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded shadow space-y-6">
            <h2 className="text-2xl font-bold text-blue-600 text-center">
                Your Test History
            </h2>

            {results.map(({ id, total, hits, ratio, timestamp, languages }, idx) => {
                const date = new Date(timestamp).toLocaleString();
                const fromLang = languages?.[0] || 'Unknown';
                const toLang = languages?.[1] || 'Unknown';

                return (
                    <div key={id} className="border border-gray-200 rounded p-4">
                        <div className="flex justify-between text-sm text-gray-500">
                            <span># {results.length - idx}</span>
                            <span>{date}</span>
                        </div>
                        <div className="mt-2 space-y-1">
                            <p className="text-lg">
                                Score: <span className="font-bold text-green-600">{hits} / {total}</span> ({ratio}%)
                            </p>
                            <p className="text-sm text-gray-600 italic">
                                Languages: {fromLang} → {toLang}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
