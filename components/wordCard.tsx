'use client'

import word from '@/models/word';
import { useEffect, useState } from 'react';

interface Word {
    _id: string;
    tittle: string;
    tags: [],
    description: String,
    date: Date
}

function WordCard() {
    const [data, setData] = useState<Word[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {data.map(word => (
                    <div className='word-card'>
                        <li key={word._id}>
                            <div className='word-card-header'>
                                <span className='text-lg'>{word.tittle}</span>
                                
                                <span className='word-tags'>
                                    {word.tags}
                                </span>
                            </div>

                            <div>
                                {word.description}
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default WordCard;
