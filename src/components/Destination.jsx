import React from "react";
import { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import { Button, Card, CardText, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Destination = () => {
  const handleViewPackage = () => {
    alert("View Package button clicked");
  };

  const [travels, setTravels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/travels")
      .then((response) => response.json())
      .then((travels) => {
        setTravels(travels);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <Container
      style={{
        marginLeft: "0",
        marginRight: "0",
        padding: "0",
      }}
    >
      <Row>
        {travels.map((travel) => (
          <Col sm>
            <Card
              key={travel.id}
              style={{ width: "30rem", margin: "10px", height: "650px" }}
            >
              <Card.Img
                variant="top"
                src={travel.image}
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title>{travel.destination}</Card.Title>
                <Card.Text>{travel.description}</Card.Text>
                <CardText>{travel.prices}</CardText>
                <NavLink to="/availablepackages">
                  <Button onClick={handleViewPackage}> View Package</Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Destination;
