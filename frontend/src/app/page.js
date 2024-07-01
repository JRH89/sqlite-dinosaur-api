'use client';

import { useState } from 'react';

export default function Query() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [results, setResults] = useState(null);

  const handleTypeChange = (e) => setType(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const fetchDinosaursByType = async () => {
    const encodedType = encodeURIComponent(type);
    const res = await fetch(`http://localhost:3001/api/dinosaurs/type/${encodedType}`);
    const data = await res.json();
    setResults(data);
  };

  const fetchDinosaursByName = async () => {
    const encodedName = encodeURIComponent(name);
    try {
      const res = await fetch(`http://localhost:3001/api/dinosaurs/name/${encodedName}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };


  return (
    <div>
      <h1>Query Dinosaurs</h1>

      <div>
        <h2>Search by Type</h2>
        <input className='text-black' type="text" value={type} onChange={handleTypeChange} />
        <button onClick={fetchDinosaursByType}>Search</button>
      </div>

      <div>
        <h2>Search by Name</h2>
        <input className='text-black' type="text" value={name} onChange={handleNameChange} />
        <button onClick={fetchDinosaursByName}>Search</button>
      </div>

      {results && (
        <div>
          <h2>Results</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
