'use client';
import { useState } from 'react';

export default function MyFilterList() {
  const [searchDefinition, setSearchDefinition] = useState('');

  // Sample data
  const definitions = [
    { id: 1, term: 'User Interface', definition: 'how users will consume and interact with your application.' },
    { id: 2, term: 'Routing', definition: 'how users navigate between different parts of your application.' },
    { id: 3, term: 'Data Fetching', definition: 'where your data lives and how to get it.' },
    { id: 4, term: 'Rendering', definition: 'when and where you render static or dynamic content.' },
    { id: 5, term: 'Integrations', definition: 'what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.' },
    { id: 6, term: 'Infrastructure', definition: 'where you deploy, store, and run your application code (serverless, CDN, edge, etc.).' },
    { id: 7, term: 'Performance', definition: 'how to optimize your application for end-users.' },
    { id: 8, term: 'Scalability', definition: 'how your application adapts as your team, data, and traffic grow.' },
    { id: 9, term: 'Developer Experience', definition: 'your team\'s experience building and maintaining your application.' },
  ];

  const filteredDefinitions = definitions.filter(definition =>
    definition.term.toLowerCase().includes(searchDefinition.toLowerCase()) ||
    definition.definition.toLowerCase().includes(searchDefinition.toLowerCase())
  );

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search definitions..."
          value={searchDefinition}
          onChange={(e) => setSearchDefinition(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <ul className="space-y-2">
        {filteredDefinitions.map(definition => (
          <li
            key={definition.id}
            className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <span className="font-medium pr-2">{definition.term}</span>
            <span className="text-sm text-gray-500">{definition.definition}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
