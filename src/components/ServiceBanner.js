import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import serviceBanner from '../assests/Services.png'

const ServiceBanner = () => {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={12}>
                    <Image src={serviceBanner} className='img-fluid' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ServiceBanner