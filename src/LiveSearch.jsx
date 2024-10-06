// src/LiveSearch.js
import React, { useState } from 'react';
import './LiveSearch.css'

function LiveSearch() {
  // Lista de elemente inițială
  const fruits = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
    'Blueberry',
    'Kiwi',
    'Watermelon',
    'Peach',
    'Cherry',
    'Papaya',
    'Pear'
  ];

  // Starea pentru termenul de căutare
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrarea elementelor pe baza termenului de căutare
  const filteredItems = fruits.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Live Search</h1>

      {/* Input de căutare */}
      <input
        type="text"
        placeholder="Căutare..."
        onChange={(e) => setSearchTerm(e.target.value)} // Actualizarea termenului de căutare=
      />

      {/* Afișarea listei filtrate */}
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        ) : (
          <li>Nicio potrivire</li>
        )}
      </ul>
    </div>
  );
}

export default LiveSearch;
