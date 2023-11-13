import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Userform = () => {
 const [selectDestination, setSelectDestination] = useState([]);
 const [formData, setFormData] = useState({
   destination: "",
   firstName: "",
   lastName: "",
   phone: "",
   email: "",
   checkIn: "",
   checkOut: "",
   people: "",
 });


 useEffect(() => {
   fetch("http://localhost:8000/travels")
     .then((resp) => resp.json())
     .then((data) => {
       const updateDestination = data.map((item) => item.destination);
       setSelectDestination(updateDestination);
     })
     .catch((err) => console.error(err));
 }, []);


 function handleSubmit(e) {
   e.preventDefault();
   fetch("http://localhost:8002/bookings", {
     method: "POST",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(formData),
   }).then((resp) => {
     if (resp.status === 201) {
       alert("Booking Succesful!");
     } else {
       alert("Booking Failed!");
     }
   });
 }


 function handleChange(e) {
   const { name, value } = e.target;


   setFormData((prevData) => ({
     ...prevData,
     [name]: value,
   }));
 }


 return (
   <div>
     <Form
       onSubmit={(event) => handleSubmit(event)}
       className="form bg-dark text-white"
     >
       <Row>
         <Col>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Destination</Form.Label>
             <Form.Select
               name="destination"
               value={formData.destination}
               onChange={handleChange}
               aria-label="Default select example"
             >
               {selectDestination &&
                 selectDestination.map((destination, index) => (
                   <option key={index} value={destination}>
                     {destination}
                   </option>
                 ))}
             </Form.Select>
           </Form.Group>
         </Col>
         <Col>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>First Name</Form.Label>
             <Form.Control
               type="text"
               placeholder="First Name"
               name="firstName"
               value={formData.firstName}
               onChange={handleChange}
             />
           </Form.Group>
         </Col>
         <Col>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Last Name</Form.Label>
             <Form.Control
               type="text"
               placeholder="Last Name"
               name="lastName"
               value={formData.lastName}
               onChange={handleChange}
             />
           </Form.Group>
         </Col>
       </Row>
       <Row>
         <Col>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Phone</Form.Label>
             <Form.Control
               type="number"
               placeholder="Phone"
               name="phone"
               value={formData.phone}
               onChange={handleChange}
             />
           </Form.Group>
         </Col>
         <Col>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email</Form.Label>
             <Form.Control
               type="email"
               placeholder="Enter email"
               name="email"
               value={formData.email}
               onChange={handleChange}
             />
           </Form.Group>
         </Col>
         <Col>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>CheckIn Date</Form.Label>
             <Form.Control
               type="date"
               placeholder="Checkin"
               name="checkIn"
               value={formData.checkIn}
               onChange={handleChange}
             />
           </Form.Group>
         </Col>
         <Col>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>CheckOut Date</Form.Label>
             <Form.Control
               type="date"
               placeholder="CheckOut"
               name="checkOut"
               value={formData.checkOut}
               onChange={handleChange}
             />
           </Form.Group>
         </Col>
         <Col>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>People</Form.Label>
             <Form.Select
               name="people"
               value={formData.people}
               onChange={handleChange}
               aria-label="People"
             >
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
               <option value="4">Four</option>
               <option value="5">Five</option>
               <option value="group">Five+</option>
             </Form.Select>
           </Form.Group>
         </Col>
       </Row>


       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Accept Terms & Conditions" />
       </Form.Group>
       <Row className=" w-4 justify-content-center">
         <Button type="submit">Submit</Button>
       </Row>
     </Form>
   </div>
 );
};


export default Userform;





