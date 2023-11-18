import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";

function HeroList() {
  return (
    <section className='container-fluid' style={{ backgroundColor: '#D7F5DC', paddingBottom: '2rem'}} >
      <Row className='mb-5' style={{ paddingLeft: '1rem'}}>
        <Col className='heroCol d-block mt-5'>
            <h1 className="font-weight-bold mt-2" style={{ fontSize: '50px' }}>Increase Your <br /> Customers Loyalty <br /> and Satisfaction</h1>
            <p className="medium" style={{ fontSize: '20px' }}>We help businesses like yours earn more customers, <br /> standout from competitors,  make more money</p>
            <Button className='mt-4' variant="success">Get Started</Button>{' '}
        </Col>
        <Col>
            <div className='d-flex my-3'>
                <img className='mx-3' src="https://i.ibb.co/cgSHvYp/Rectangle1.png" alt="Rectangle1" border="0"/>
                <img src="https://i.ibb.co/1XM7Y8M/Rectangle2.png" alt="Rectangle2" border="0"/>
            </div>
            <div className='d-flex'>
                <img className='mx-3' src="https://i.ibb.co/j8JYKSh/Rectangle3.png" alt="Rectangle3" border="0"/>
                <img src="https://i.ibb.co/b1TdGNc/Rectangle4.png" alt="Rectangle4" border="0"/>
            </div>
        </Col>
      </Row>
      <Row style={{ backgroundColor: '#FFFFFF', paddingLeft: '1rem' }}>
          <Marquee autoFill="true" pauseOnHover="true">
          <Col><img src="https://i.ibb.co/Wp5BkTV/5.png" height={"80px"} alt="5" border="0" style={{ marginRight: '175px' }}/></Col>
          <Col><img src="https://i.ibb.co/nMgL7mX/4.png" height={"80px"} alt="4" border="0" style={{ marginRight: '175px' }}/></Col>
          <Col><img src="https://i.ibb.co/CbXKptd/3.png" height={"100px"} alt="3" border="0" style={{ marginRight: '175px' }}/></Col>
          <Col><img src="https://i.ibb.co/QfJHpV0/2.png" height={"100px"} alt="2" border="0" style={{ marginRight: '175px' }}/></Col>
          <Col><img src="https://i.ibb.co/31F6dYh/1.png" height={"80px"} alt="1" border="0" style={{ marginRight: '175px' }}/></Col>
          </Marquee>
      </Row>
    </section>
  );
}

export default HeroList;

