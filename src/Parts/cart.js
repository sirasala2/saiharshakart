import React from 'react';
import proimg from '../assets/soundimg.jpeg'
import {Button, Row,Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

const Cart = () => {
    const checkoutbtn ={
checkoutbtn: {
    float:'right'
  }
};
    const header_cart = {
        bold: {fontWeight: 'bold',color:"grey",textDecoration:"underline"},
        
    };
    const produc_image = {
        style: {width:'60px',height:'60px'},

        
    };


    return (
        <div>
        <h2 style={header_cart.bold}>cart</h2>
        <Card style={{ width: '100%' }} href="/product-detail">
            <Row>
                <Col>
            <img variant="top"style={produc_image.style} src={proimg} />
            </Col>

            <Col>
            <h2>sound</h2>
            </Col>
            <Col><i class="fa fa-times" aria-hidden="true"></i></Col>
            </Row>
        
      </Card>

      <Card style={{ width: '100%' }} href="/product-detail">
            <Row>
                <Col>
            <img variant="top"style={produc_image.style} src={proimg} />
            </Col>

            <Col>
            <h2>sound</h2>
            </Col>
            <Col><i class="fa fa-times" aria-hidden="true"></i></Col>
            </Row>
        
      </Card>

      <Card style={{ width: '100%' }} href="/product-detail">
            <Row>
                <Col>
            <img variant="top"style={produc_image.style} src={proimg} />
            </Col>

            <Col>
            <h2>sound</h2>
            </Col>
            <Col><i class="fa fa-times" aria-hidden="true"></i></Col>
            </Row>
        
      </Card>
      <Row>
          <Col></Col>
          <Col>
          <h2>Total=rs50</h2>
          </Col>
          <Col>
         
          <Button style={checkoutbtn.checkoutbtn}>Checkout</Button>
          </Col>
          </Row>
      </div>
    );
};

export default Cart;