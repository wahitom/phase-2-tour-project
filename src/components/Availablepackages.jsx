import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { destinations } from "./PackagesChild/PackageData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import PackagesCard from "./PackagesChild/PackagesCard";
import Stack from "react-bootstrap/Stack";


const AvailablePackages = () => {
 const [selectedDestination, setSelectedDestination] = useState();


 const togglePackages = (destinationId) => {
   setSelectedDestination(
     selectedDestination === destinationId ? null : destinationId
   );
 };


 console.log(selectedDestination);


 return (
   <>
     <Row xs={1} md={2} className="g-4">
       <Col>
         {destinations.map((destination) => (
           <div key={destination.id} style={{ margin: "50px" }}>
             <Card
               style={{
                 width: "170vh",
                 height: "50vh",
                 border: "10px",
               }}
             >
               <div style={{ display: "flex" }}>
                 <div style={{ flex: 1 }}>
                   <Card.Img
                     variant="top"
                     src={destination.destinationImg}
                     style={{ width: "90vh", height: "50vh" }}
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
                           Bed and Breakfast Inclusive as you enjoy the
                           stunning views of the {destination.destination}
                         </p>
                       </div>
                     </Card.Text>
                     <div>
                       <NavLink to={`/morepackages/${destination.id}`}>
                         <Button
                           variant="success"
                           onClick={() => togglePackages(destination.id)}
                           style={{
                             marginBottom: "10px",
                             fontSize: "15px",
                             backgroundColor: "#1a4301",
                           }}
                         >
                           {selectedDestination === destination.id
                             ? "Hide Package options"
                             : "See More Package options"}
                         </Button>
                       </NavLink>
                     </div>
                   </Card.Body>
                 </div>
               </div>
             </Card>
           </div>
         ))}
       </Col>
     </Row>
   </>
 );
};


export default AvailablePackages;

