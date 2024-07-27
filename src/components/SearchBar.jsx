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

  const handleClear = () => {
    setQuery(""); // Clear the input field
    document.querySelector('input[name="search"]').focus(); // Refocus the input field
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <input
        type="text"
        name="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for News..."
        className="p-2 rounded-md border border-gray-300 dark:border-gray-700 text-black pl-10 pr-14" // Add padding for clear button
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-gray-600"
          aria-label="Clear"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
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
