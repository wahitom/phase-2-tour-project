import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//import ExampleCarouselImage from "components/ExampleCarouselImage";

import { data, destinationPackages } from "./data/data";

import { maasaiMara } from "./data/PackagData";

const Availablepackages = () => {
  //console.log(data);
  //console.log(destinationPackages);

  const [packagesDisplay, setPackagesDisplay] = useState(null);

  //handles displaying  packages
  // console.log(packagesDisplay);
  const packageToDisplay = maasaiMara.filter((maasaiMara) =>
    console.log(maasaiMara.threeDayer + maasaiMara.activity2)
  );

  //function to display

  /* setPackagesDisplay(
      destinationPackages.map((destinationPackage, index) => (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Body>
            <Card.Title>{destinationPackage.package1}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      )) */

  //maps through every item in the destinationPackages List and displays them
  const mappedDestinationPackages = destinationPackages.map(
    (destinationPackage) => (
      <Card style={{ width: "18rem" }} key={destinationPackage.id}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{destinationPackage.destination}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">See More packages</Button>
        </Card.Body>
      </Card>
    )
  );

  return (
    <>
      <div>{mappedDestinationPackages}</div>
    </>
  );
};

export default Availablepackages;