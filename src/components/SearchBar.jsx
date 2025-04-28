import { useState, useCallback } from "react";
import { debounce } from "../utils/searchUtils";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const debouncedSearch = useCallback(
    debounce((value) => onSearch(value), 300),
    [onSearch]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  const handleClearSearch = () => {
    setInputValue("");
    onSearch("");
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search companies (min 3 characters)..."
          className="search-input"
        />
        {inputValue && (
          <button
            className="clear-button"
            onClick={handleClearSearch}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      {inputValue.length > 0 && inputValue.length < 3 && (
        <div className="search-hint">
          Please enter at least 3 characters to search
        </div>
      )}
    </div>
  );
};

export default SearchBar;
