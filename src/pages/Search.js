import React from "react";

import './Search.css';
import SearchResult from "../components/SearchResult";

const Search = () => {
  return (
    <div className="main-content">
      <div className="search__results">
        <SearchResult />
      </div>
    </div>
  )
}

export default Search;