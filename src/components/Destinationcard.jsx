import { destinationpackages } from "./PackagesChild/PackageData";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Destinationcard() {
  const [showPackages, setShowPackages] = useState(false);

  const togglePackages = () => {
    setShowPackages(!showPackages);
  };

  console.log({ destinationpackages });
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        <Col>
          {destinationpackages.map((destinationpackage) => (
            <Card
              key={destinationpackage.id}
              style={{ width: "150vh", height: "40vh", marginBottom: "20px" }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <Card.Img
                    variant="top"
                    src={destinationpackage.destinationImg}
                    style={{ width: "70vh", height: "40vh" }}
                  />
                </div>
                <div
                  style={{
                    flex: 0.5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                  }}
                >
                  <Card.Body>
                    <h1 style={{ fontSize: "20px" }}>
                      <strong> {destinationpackage.destination}</strong>
                    </h1>
                    <Card.Text>
                      <div style={{ fontSize: "15px" }}>
                        <p>
                          <strong>
                            Price Per Night :{destinationpackage.basicPrices}{" "}
                            USD
                          </strong>
                        </p>
                        <p>
                          Bed and Breakfast Inclusive as you enjoy the stunning
                          views of the Mara
                        </p>
                      </div>
                    </Card.Text>
                    <div>
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
                    </div>
                    <div>
                      <Button
                        variant="success"
                        onClick={togglePackages}
                        style={{
                          marginBottom: "10px",
                          fontSize: "15px",
                          backgroundColor: "#1a4301",
                        }}
                      >
                        {showPackages
                          ? "See More Package options"
                          : "See More Package options"}
                      </Button>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Destinationcard;
