import React from 'react'
import CollapsiblePanel from './Collapsiblepanel'
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './ContactUs.css';
import Footer from './Footer'


function ContactUs() {
    return (
        <div>
            <div className="contact-div">
                <h4>Contact Us </h4>
            </div>


            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-20"
                        src="https://www.dialabank.com/wp-content/uploads/2019/11/Business-Loan.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  h-20"
                        src="https://uswitch-contentful.imgix.net/t014ej9w3ur1/2XGEQxRIa3oI2WC0LuHJQU/400b916184e156b7c76705ca44dc218a/two-businessmen-using-computer.jpg?auto=format&fit=crop&crop=faces%2Centropy&fill=solid&ixlib=react-8.6.4"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  h-20"
                        src="https://www.clix.capital/clixblog/wp-content/uploads/sites/3/2020/11/Business-loan-_Onsite-Blog-2_5-Nov_Meetu_Rev-1R.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <CollapsiblePanel />
            </div>

            <div className="form-grp-div">
                <Form>
                    <Form.Row className="m-5">
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group   className="ml-3" controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group className="m-5" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group  className="m-5" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row className="m-5">
                        <Form.Group controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group   className="ml-3" controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose</option>
                                <option>Bangalore</option>
                                <option>Cuttack</option>
                                <option>HSR Layout</option>
                               
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="ml-3" controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check className="ml-5" type="checkbox" label="Check me" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <Footer/>
        </div >
    )
}

export default ContactUs
