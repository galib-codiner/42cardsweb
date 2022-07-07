import React from 'react'
import '../styles/layout/Services.css'
import { Container, Row, Col } from 'react-bootstrap';

const ServiceList = () => {
  return (
    <div className='serviceList mt-5 mb-5'>
      <Container>
        <Row>
          <Col md={4}>
            <h3>Credit Card Design & Onboarding</h3>
          </Col>
          <Col md={4}>
            <h3>Credit Card Authorization</h3>
          </Col>
          <Col md={4}>
            <h3>Payment Processing</h3>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3>Rewards Program Management</h3>
          </Col>
          <Col md={4}>
            <h3>Customer Billing</h3>
          </Col>
          <Col md={4}>
            <h3>Collections & Dispute Resolutions</h3>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3>Credit Card Risk Management</h3>
          </Col>
          <Col md={4}>
            <h3>Credit Card Fraud Detection</h3>
          </Col>
          <Col md={4}>
            <h3>Customer Query Resolution</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServiceList