import React, { useEffect, useState } from "react";
import "./searchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState([]);
  const [filteredDest, setFilteredDest] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    fetch(" http://localhost:3001/travels")
      .then((resp) => resp.json())
      .then((data) => {
        const travelHere = data.map((item) => item.destination);
        setDestination(travelHere);
      })
      .catch((err) => console.error(err));
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
    setIsTyping(false);
  }

  useEffect(() => {
    return () => {
      setFilteredDest([]);
      setIsTyping(false);
    };
  }, []);

  function populateSearchBar(value) {
    setQuery(value);
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
          <button className="btn btn-secondary m-1" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="dropdown">
        {filteredDest &&
          filteredDest.map((destination) => (
            <div onClick={() => populateSearchBar(destination)}>
              {destination}
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchBar;
