import React from 'react';
import proimg from '../assets/soundimg.jpeg'
import { Button, Row, Container, Col } from 'react-bootstrap';

const Product = (props) => {
  return (
    <div style={{ margin: '10px' }}>
      <Row>
        <Col>
          <img src={proimg} />
          <Button href="/product-detail">details
          </Button>
        </Col>
        <Col>
        <img src={proimg} />
          <Button  href="/product-detail">
          </Button>
        </Col>
        <Col>
        <img src={proimg} />
          <Button  href="/product-detail">
          </Button>
        </Col>
        <Col>
        <img src={proimg} />
          <Button  href="/product-detail">
          </Button>
        </Col>
      </Row>
    </div>


  );
};


export default Product;