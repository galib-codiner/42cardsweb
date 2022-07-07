import React from 'react'
import '../styles/layout/Home.css'
import { Container, Row, Col } from 'react-bootstrap';

const MissionVisionValue = () => {
  return (
    <div className='visionMissionValue'>
      <Container>
        <Row>
          <Col md={4} className="vision">
            <div className='inner'>
            <h4>Vision</h4>
            <p>To be the first choice for banks in their quest to build, operate and 
              manage a profitable credit card business that delivers a seamless and 
              delightful digital customer experience.  
            </p>
            </div>
          </Col>
          <Col md={4} className="mission">
            <h4>Mission</h4>
            <p>To work with our partner banks using future technology, robust processes and well-trained 
              personnel to ensure timely, accurate, compliant and cost-effective solutions that not only 
              meet our client’s needs but also go well beyond their expectations.
            </p>
          </Col>
          <Col md={4} className="value">
            <h4>Values</h4>
            <ul>
              <li>Responsibility</li>
              <li>Reliability</li>
              <li>Transparency</li>
              <li>Accountability</li>
              <li>Fairness</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MissionVisionValue