import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./searchBar.css";
import SearchResults from "./SearchResults";

const SearchBar = ({BASE_URL}) => {
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState([]);
  const [filteredDest, setFilteredDest] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Fetch Data for destinations and set it to Travels
    fetch(BASE_URL)
      .then((resp) => resp.json())
      .then((data) => {
        const travelHere = data.map((item) => item.destination);
        setDestination(travelHere);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      const searchResults = document.getElementById("searchResults");

      if (searchResults && !searchResults.contains(event.target)) {
        // Click occurred outside SearchResults, hide it
        setFilteredDest([]);
        setIsTyping(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleChange(event) {
    const value = event.target.value;
    setQuery(value);
    setIsTyping(value !== "");

    const suggestion = destination.filter((destination) =>
      destination.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredDest(suggestion);
  }

  function handleSearch() {
    const updatedQuery = destination.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDest(updatedQuery);
    setIsTyping(isTyping);
  }

  function populateSearchBar(value) {
    setQuery(value);
    setFilteredDest([]);
  }

  return (
    <>
      <div className="input-group m-2 ">
        <div className="px-4">
          <input
            className="py-1"
            placeholder="enter destination"
            value={query}
            onChange={handleChange}
          ></input>
          <NavLink to="/destination">
            <button className="btn btn-secondary m-1" onClick={handleSearch}>
              Search
            </button>
          </NavLink>
        </div>
      </div>
      <div id="searchResults">
        <SearchResults
          filteredDest={filteredDest}
          populateSearchBar={populateSearchBar}
        />
      </div>
    </>
  );
};

export default SearchBar;
