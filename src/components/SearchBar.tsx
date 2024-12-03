import React, { useState } from "react";
import "./SearchBar.css"; // Import the CSS file

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = () => {
    if (keyword.trim()) {
      onSearch(keyword);
    }
  };

  return (
    <div className="search-container">
      <img
        src="https://meetdexy.ai/dexylogores.svg"
        alt="Dexy Logo"
        className="logo"
      />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter job keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
