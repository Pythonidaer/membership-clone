'use client';
import { useState } from 'react';

export default function TestFilterList() {
    const [searchComic, setSearchComic] = useState('');

    const comics = [
        { id: 1, name: 'Louis C.K.' },
        { id: 2, name: 'George Carlin' },
        { id: 3, name: 'John Mulaney' },
        { id: 4, name: 'Bill Burr' },
        { id: 5, name: 'Dennis Leary' },
    ];
    
    const filteredComics = comics.filter(comic => comic.name.toLowerCase().includes(searchComic.toLowerCase()));
    
    return (
        <div>
            <h1>Test Filter List</h1>
            <input
                type="text"
                placeholder="Search comics..."
                value={searchComic}
                onChange={(e) => setSearchComic(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ul className="space-y-2">
                {filteredComics.map(comic => (
                    <li
                        key={comic.id}
                        className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <span className="font-medium pr-4">{comic.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}