import React from 'react'
import '../styles/layout/Contact.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';

const Contactus = () => {
  return (
    <div className="contact-us">
        <Container>
            <Row>
                <Col md={12}>
                    <h2>Transform Your Credit Cards Business</h2>
                </Col>
            </Row>
            <Row className="mt-4 mb-4">
                <Col md={6}>
                    <div className="contact-left">
                        <p>
                            Be one step ahead in today’s fast-paced competitive environment and make your customers 
                            choose you over others by offering a complete and customised credit cards experience. 
                            Partner with us and we’ll help you with everything that your bank needs in order to 
                            provide your customer with solutions that meet their unique requirements.
                        </p>
                        <div>
                            <a href='mailto:info@42cards.in' className="emailIcon" style={{ color: '#000'}}> 
                                <EmailIcon /> info@42cards.in
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="contact-right">
                        <p>
                            We are happy to answer your questions. Please submit 
                            your query below and we will get in touch with you.
                        </p>
                        <div className="contactForm">
                        <Form>
                            <Form.Group className="mb-3" controlId="yourName">
                                <Form.Control type="text" placeholder="Your Name*" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="yourEmail">
                                <Form.Control type="email" placeholder="Email*" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="yourOrganization">
                                <Form.Control type="text" placeholder="Organization*" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Control as="textarea" rows={3}  placeholder="Message" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contactus