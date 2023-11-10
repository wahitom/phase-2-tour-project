import React from "react";
import "./searchResult.css";

const SearchResults = ({ filteredDest, populateSearchBar }) => {
  return (
    <div className="filteredResult">
      {filteredDest.map((destination) => (
        <div className="result" onClick={() => populateSearchBar(destination)}>
          {destination}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
