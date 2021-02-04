import React from 'react';
import proimg from '../assets/soundimg.jpeg'
import { Button, Card, Row, Container, Col } from 'react-bootstrap';

const Product = (props) => {
  return (
    <div style={{ margin: '10px' }}>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={proimg} />
            <Card.Body>
              <Button variant="btn btn-success" href="/product-detail">
                <Card.Title>Sound</Card.Title>
              </Button>
    
             
            </Card.Body>
          </Card></Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={proimg} />
            <Card.Body>
              <Button variant="btn btn-success" href="/product-detail">
                <Card.Title>Sound2</Card.Title>
              </Button>

            
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>


  );
};


export default Product;