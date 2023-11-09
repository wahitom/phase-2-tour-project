import React, { useState } from "react";
import { Maasaimara } from "./PackageData";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { CardImgOverlay, Col, Row } from "react-bootstrap";

const MaasaiMara = () => {
  const [showPackages, setShowPackages] = useState(false);

  const destination = Maasaimara.find(
    (item) => item.destination === "Maasai Mara"
  );

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
                  src={destination.destinationImage}
                  style={{ width: "70vh", height: "40vh" }}
                />
                {/* <CardImgOverlay>
                  <h1>{destination.destination}</h1>
                </CardImgOverlay> */}
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
                  {/*  <Card.Title style={{ fontSize: "20px" }}>
                    {destination.destination}
                  </Card.Title> */}
                  <h1 style={{ fontSize: "20px" }}>
                    <strong> {destination.destination}</strong>
                  </h1>
                  <Card.Text>
                    <div style={{ fontSize: "15px" }}>
                      <p>
                        <strong>
                          Price Per Night :{destination.basicPrices} USD
                        </strong>
                      </p>
                      <p>
                        Bed and Breakfast Inclusive as you enjoy the stunning
                        views of the Mara
                      </p>
                    </div>
                  </Card.Text>
                  <div>
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
                        ? "Hide Packages"
                        : "See More Package options"}
                    </Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Stack direction="horizontal" gap={5}>
        {showPackages && (
          <Card style={{ width: "16rem", marginTop: "30px" }} className="p-2">
            <Card.Img
              variant="top"
              src={destination.threeDayerImg}
              style={{ height: "30vh" }}
            />
            <Card.Body>
              <h6>
                <strong>{destination.threeDayer}</strong>
              </h6>
              <Card.Text>
                <div style={{ fontSize: "15px" }}>
                  <p>
                    Enjoy a variety of activities we offer from the three day
                    package including {destination.threeDayerActivity1} or{" "}
                    {destination.threeDayerActivity2} or even{" "}
                    {destination.threeDayerActivity3}
                  </p>
                  <p>
                    <strong>Price: {destination.threeDayerPrices} USD</strong>
                  </p>
                </div>
              </Card.Text>
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
              <h6>
                <strong>{destination.fourDayer}</strong>
              </h6>
              <Card.Text>
                <div style={{ fontSize: "15px" }}>
                  <p>
                    Stay for longer and enjoy our four day package including{" "}
                    {destination.fourDayerActivity1} or{" "}
                    {destination.fourDayerActivity2} or even{" "}
                    {destination.fourDayerActivity3} and{" "}
                    {destination.fourDayerActivity4}
                  </p>
                </div>
                <p>
                  <strong>Price: {destination.fourDayerPrices} USD</strong>
                </p>
              </Card.Text>
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
              <h6>
                <strong>{destination.fiveDayer}</strong>
              </h6>
              <Card.Text>
                <div style={{ fontSize: "15px" }}>
                  <p>
                    Enjoy our five day package including activities such as{" "}
                    {destination.fiveDayerActivity1} or{" "}
                    {destination.fiveDayerActivity2} or even{" "}
                    {destination.fiveDayerActivity3},{" "}
                    {destination.fiveDayerActivity4} and{" "}
                    {destination.fiveDayerActivity5}
                  </p>
                </div>
                <p>
                  <strong>Price: {destination.fiveDayerPrices} USD</strong>
                </p>
              </Card.Text>
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
              <h6>
                <strong>{destination.weekend}</strong>
              </h6>
              <Card.Text>
                <div style={{ fontSize: "15px" }}>
                  <p>
                    Enjoy our fun weekend activites package inclusive of Bed and
                    Breakfast as well as activities such as{" "}
                    {destination.weekendActivity1} and{" "}
                    {destination.weekendActivity2}
                  </p>
                </div>
                <p>
                  <strong>Price: {destination.weekendPrices} USD</strong>
                </p>
              </Card.Text>
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
            </Card.Body>
          </Card>
        )}
      </Stack>
    </>
  );
};

export default MaasaiMara;
