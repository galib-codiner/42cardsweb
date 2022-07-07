import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutBanner from '../assests/About-banner.png'

const AboutBanner = () => {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={12}>
                    <Image src={aboutBanner} className='img-fluid' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutBanner