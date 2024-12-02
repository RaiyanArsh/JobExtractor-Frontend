import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = () => {
    if (keyword.trim()) {
      onSearch(keyword);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter job keyword..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
