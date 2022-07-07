import React from 'react'
import '../styles/layout/Contact.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import contactBanner from '../assests/contact-banner.png'

const ContactBanner = () => {
  return (
    <div className='contactBanner'>
        <Container fluid>
            <Row>
                <Col md={12}>
                    <Image src={contactBanner} className='img-fluid' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactBanner