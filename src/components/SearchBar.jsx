import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState([]);
  const [filteredDest, setFilteredDest] = useState([]);

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
  }

  return (
    <>
      <div>
        <div>SearchBar</div>
        <input
          placeholder="enter destination"
          value={query}
          onChange={handleChange}
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="dropdown">
        {filteredDest &&
          filteredDest.map((destination) => (
            <div key={destination}>{destination}</div>
          ))}
      </div>
    </>
  );
};

export default SearchBar;
