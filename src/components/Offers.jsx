import { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Offers({BASE_URL}) {
  const [destinationsWithOffers, setDestinationsWithOffers] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
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
                <NavLink to="/userform">
                  <Button
                    variant="success"
                    style={{
                      marginBottom: "10px",
                      fontSize: "15px",
                      backgroundColor: "#1a4301",
                    }}
                  >
                    Book Now!
                  </Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Offers;
