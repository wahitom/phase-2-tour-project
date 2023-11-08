import React, { useState } from "react";
import { Malindi } from "./PackageData";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { Col, Row } from "react-bootstrap";

const MaasaiMara = () => {
  const [showPackages, setShowPackages] = useState(false);

  const destination = Malindi.find((item) => item.destination === "Malindi");

  if (!destination) {
    // Handle the case when the destination is not found
    return <div>Destination not found</div>;
  }

  const togglePackages = () => {
    setShowPackages(!showPackages);
  };

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card style={{ width: "150vh", height: "40vh" }}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <Card.Img
                  variant="top"
                  src={destination.destinationImg}
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
                  <Card.Title>{destination.destination}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="primary" onClick={togglePackages}>
                    {showPackages ? "Hide Packages" : "See More packages"}
                  </Button>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Stack direction="horizontal" gap={3}>
        {showPackages && (
          <Card style={{ width: "16rem", marginTop: "30px" }} className="p-2">
            <Card.Img
              variant="top"
              src={destination.threeDayerImg}
              style={{ height: "30vh" }}
            />
            <Card.Body>
              <Card.Title>{destination.threeDayer}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">See More packages</Button>
            </Card.Body>
          </Card>
        )}

        {showPackages && (
          <Card style={{ width: "16rem", marginTop: "30px" }} className="p-2">
            <Card.Img
              variant="top"
              src={destination.fourDayerImg}
              style={{ height: "30vh" }}
            />
            <Card.Body>
              <Card.Title>{destination.fourDayer}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">See More packages</Button>
            </Card.Body>
          </Card>
        )}

        {showPackages && (
          <Card style={{ width: "16rem", marginTop: "30px" }} className="p-2">
            <Card.Img
              variant="top"
              src={destination.fiveDayerImg}
              style={{ height: "30vh" }}
            />
            <Card.Body>
              <Card.Title>{destination.fiveDayer}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">See More packages</Button>
            </Card.Body>
          </Card>
        )}

        {showPackages && (
          <Card style={{ width: "16rem", marginTop: "30px" }} className="p-2">
            <Card.Img
              variant="top"
              src={destination.weekendImg}
              style={{ height: "30vh" }}
            />
            <Card.Body>
              <Card.Title>{destination.weekend}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">See More packages</Button>
            </Card.Body>
          </Card>
        )}
      </Stack>
    </>
  );
};

export default MaasaiMara;
