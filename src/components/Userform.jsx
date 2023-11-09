import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


const Userform = () => {
    const[selectDestination, setSelectDestination] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/travels')
        .then(resp => resp.json())
        .then(data =>{
            const updateDestination = data.map((item) => item.destination)
            setSelectDestination(updateDestination)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <Form className='form bg-dark text-white'>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Destination</Form.Label>
                            <Form.Select aria-label="Default select example">
                                {
                                    selectDestination && selectDestination.map((destination, index) =>(
                                        <option key={index}>{destination}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>CheckIn Date</Form.Label>
                            <Form.Control type="date" placeholder="Checkin" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>CheckOut Date</Form.Label>
                            <Form.Control type="date" placeholder="CheckOut" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>People</Form.Label>
                            <Form.Select aria-label="People">
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
                    <Button >Submit</Button>
                </Row>
            </Form>
        </div>
    );
}

export default Userform;
