import React, { useState } from "react";

function SearchForm({ onSearchTermChange }) {
  const [searchStr, setSearchStr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchTermChange(searchStr);
  };

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter search term..."
          value={searchStr}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
