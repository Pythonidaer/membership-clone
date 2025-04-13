'use client';

import { useState } from 'react';

export default function FilterList() {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const items = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Banana', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' },
    { id: 4, name: 'Broccoli', category: 'Vegetable' },
    { id: 5, name: 'Orange', category: 'Fruit' },
  ];

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <ul className="space-y-2">
        {filteredItems.map(item => (
          <li
            key={item.id}
            className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <span className="font-medium pr-4">{item.name}</span>
            <span className="text-sm text-gray-500">{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
