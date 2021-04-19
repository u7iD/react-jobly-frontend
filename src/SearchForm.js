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
    <form className="form-inline mb-4 mt-4" onSubmit={handleSubmit}>
      <input
        className="form-control form-control-lg flex-grow-1"
        type="search"
        placeholder="Enter search term..."
        value={searchStr}
        onChange={handleChange}
        data-test="search-input"
      />

      <button
        className="btn btn-lg btn-primary"
        type="submit"
        data-test="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default SearchForm;
