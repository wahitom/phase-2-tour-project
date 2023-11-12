import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { destinations } from "./PackageData";


const PackagesCard = () => {
 const cardsPerRow = 5;


 return (
   <div style={{ margin: "20px" }}>
     <Row xs={1} md={2} className="g-4">
       {destinations.map((destination, index) => (
         <div
           key={destination.id}
           style={{
             display: "flex",
             width: "200%",
             //margin: "0px",
           }}
         >
           <Card style={{ width: "20rem", margin: "10px", height: "40rem" }}>
             <Card.Img
               variant="top"
               src={destination.threeDayerImg}
               style={{ height: "20rem" }}
             />
             <Card.Body>
               <h5>
                 <strong>{destination.destination}</strong>
               </h5>
               <h6>
                 <strong>{destination.threeDayer}</strong>
               </h6>
               <Card.Text>
                 <div style={{ fontSize: "15px" }}>
                   <p>
                     Enjoy a variety of activities we offer from the three-day
                     package including {destination.threeDayerActivity1} or{" "}
                     {destination.threeDayerActivity2} or even{" "}
                     {destination.threeDayerActivity3}
                   </p>
                   <p>
                     <strong>Price: {destination.threeDayerPrices} USD</strong>
                   </p>
                 </div>
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


           <Card style={{ width: "20rem", margin: "10px", height: "40rem" }}>
             <Card.Img
               variant="top"
               src={destination.fourDayerImg}
               style={{ height: "20rem" }}
             />
             <Card.Body>
               <h5>
                 <strong>{destination.destination}</strong>
               </h5>
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


           <Card style={{ width: "20rem", margin: "10px", height: "40rem" }}>
             <Card.Img
               variant="top"
               src={destination.fiveDayerImg}
               style={{ height: "20rem" }}
             />
             <Card.Body>
               <h5>
                 <strong>{destination.destination}</strong>
               </h5>
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


           <Card style={{ width: "20rem", margin: "10px", height: "40rem" }}>
             <Card.Img
               variant="top"
               src={destination.weekendImg}
               style={{ height: "20rem" }}
             />
             <Card.Body>
               <h5>
                 <strong>{destination.destination}</strong>
               </h5>
               <h6>
                 <strong>{destination.weekend}</strong>
               </h6>
               <Card.Text>
                 <div style={{ fontSize: "15px" }}>
                   <p>
                     Enjoy our fun weekend activities package inclusive of Bed
                     and Breakfast and activities such as{" "}
                     {destination.weekendActivity1} and{" "}
                     {destination.weekendActivity2}
                   </p>
                 </div>
                 <p>
                   <strong>Price: {destination.weekendPrices} USD</strong>
                 </p>
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
         </div>
       ))}
     </Row>
   </div>
 );
};


export default PackagesCard;



