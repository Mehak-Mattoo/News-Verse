import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!query) return;
    onSearch(query); // Call the parent function to perform the search
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for News..."
        className="p-2 rounded-md border border-gray-300 dark:border-gray-700 text-black"
      />
      <button
        type="submit"
        className="bg-orange-400 font-medium dark:bg-orange-500 text-white py-2 px-4 rounded-md ml-2 hover:bg-[#ffa35c] dark:hover:bg-[#ee6903]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
