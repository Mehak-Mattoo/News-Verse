import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for news..."
        className="p-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
      />
      <button
        type="submit"
        className="bg-[#ffb073] dark:bg-orange-600 dark:text-white py-2 px-4 rounded-md ml-2 hover:bg-[#ffa35c] dark:hover:bg-[#ee6903]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
