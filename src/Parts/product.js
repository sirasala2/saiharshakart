import React from 'react';
import proimg from '../assets/soundimg.jpeg'
import { Button, Row, Container, Col } from 'react-bootstrap';

const Product = (props) => {
  return (
      <Row style={{margin:"10px"}}>
        <Col style={{border:"1px solid", borderColor:"grey",borderRadius:"5px",margin:"10px",width:"20%"}}>
          <img src={proimg} />
          <Button href="/product-detail">details
          </Button>
        </Col>
        <Col style={{border:"1px solid", borderColor:"grey",borderRadius:"5px",margin:"10px",width:"20%"}}>
        <img src={proimg} />
          <Button  href="/product-detail">
          </Button>
        </Col>
        <Col style={{border:"1px solid", borderColor:"grey",borderRadius:"5px",margin:"10px",width:"20%"}}>
        <img src={proimg} />
          <Button  href="/product-detail">
          </Button>
        </Col>
        <Col style={{border:"1px solid", borderColor:"grey",borderRadius:"5px",margin:"10px",width:"20%"}}>
        <img src={proimg} />
          <Button  href="/product-detail">
          </Button>
        </Col>
      </Row>


  );
};


export default Product;