import React, { useState, ChangeEvent } from 'react';
import './SearchBar.css';
import Navbar from './compenents/Navbar';

export interface SearchBarProps {
  placeholder: string;
}

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const storedQueries = JSON.parse(
      localStorage.getItem('searchQueries') || '[]'
    );
    storedQueries.push(searchQuery);
    localStorage.setItem('searchQueries', JSON.stringify(storedQueries));
    setSearchQuery('');
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movie"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
