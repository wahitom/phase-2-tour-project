import React, { useState } from "react";
import { Maasaimara } from "./PackageData";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{destination.destination}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={togglePackages}>
            {showPackages ? "Hide Packages" : "See More packages"}
          </Button>
        </Card.Body>
      </Card>

      <Stack direction="horizontal" gap={3}>
        {showPackages && (
          <Card style={{ width: "18rem" }} className="p-2">
            <Card.Img variant="top" src="holder.js/100px180" />
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
          <Card style={{ width: "18rem" }} className="p-2">
            <Card.Img variant="top" src="holder.js/100px180" />
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
          <Card style={{ width: "18rem" }} className="p-2">
            <Card.Img variant="top" src="holder.js/100px180" />
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
      </Stack>
    </>
  );
};

export default MaasaiMara;
