import { useState, useEffect } from "react";

function Offers() {
  const [destinationsWithOffers, setDestinationsWithOffers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/travels")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const travels = data.travels;
        // Filter destinations with offers and set the state
        const destinationsWithOffers = travels.filter((travel) => travel.offer);
        setDestinationsWithOffers(destinationsWithOffers);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Destinations with Offers</h1>
      <ul>
        {destinationsWithOffers.map((destination) => (
          <div key={destination.id}>
            <h2>{destination.destination}</h2>
            <p>{destination.description}</p>
            <img src={destination.image} alt={destination.destination} />
            <p>Price: {destination.prices}</p>
            <h3>Offers:</h3>
            <ul>
              {Object.entries(destination.offer).map(([month, discount]) => (
                <li key={month}>
                  {month}: {discount}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Offers;
