import { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

function Offers() {
  const [destinationsWithOffers, setDestinationsWithOffers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/travels")
      .then((response) => {
        if (!response.ok) {
          return "Network response was not ok";
        }
        return response.json();
      })
      .then((travels) => {
        //console.log(travels)
        // Filter destinations with offers and set the state
        const destinationsWithOffers = travels.filter((travel) => travel.offer);
        setDestinationsWithOffers(destinationsWithOffers);
        //console.log(destinationsWithOffers)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
    <h3>Destinations with Offers</h3>

    <Row>
      {destinationsWithOffers.map((destination) => (
        <Col key={destination.id} md={4}>
          <Card margin="3px">
            <Card.Body>
              <Card.Title style={{ color: "red" }}>
                {destination.destination}
              </Card.Title>
              <Card.Text>
                <p>Price: {destination.prices}</p>
                <h5>Offers:</h5>
                <ul>
                  {Object.entries(destination.offer).map(
                    ([month, discount]) => (
                      <li key={month}>
                        {month}: {discount}
                      </li>
                    )
                  )}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
}

export default Offers;
  