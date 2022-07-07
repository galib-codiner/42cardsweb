import React from 'react'
import '../styles/layout/Home.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner from '../assests/homepage-background.png'

const Banner = () => {
  return (
    <div>
        <Container fluid className='banner'>
          <Row>
            <Col md={12}>
              <Image src={banner}  />
            </Col>
            <div className='headerText'>
              <h2 className='mt-3'>Make Your Bank Everyone’s Choice For Credit Cards</h2>
              <p className='mt-3'>Increase your customer lifetime value with credit cards</p>
              <button className='mt-3'> <Link to="/contact">Get Started</Link></button>
            </div>
          </Row>
        </Container>
    </div>
  )
}

export default Banner