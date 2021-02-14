import React from 'react';
import proimg from '../assets/soundimg.jpeg'
import { Button, Row, Col, Card } from 'react-bootstrap';


const Cart = () => {
    const checkoutbtn = {
        checkoutbtn: {
            float: 'right'
        }
    };
    
    

    
    const header_cart = {
        bold: { fontWeight: 'bold', color: "grey", textDecoration: "underline" },

    };
    const produc_image = {
        style: { width: '60px', height: '60px' },


    };


    return (
        <div>
            <Card style={{ width: '7%' }}><h2 style={header_cart.bold}>CART</h2></Card>
            <br />
            <Card style={{ width: '65%' }} href="/product-detail">
                <Row>
                    <Col>
                        <img variant="top" style={produc_image.style} src={proimg} />
                    </Col>

                    <Col>
                        <h2>sound</h2>
                    </Col>
                    <Col><i class="fa fa-times" aria-hidden="true" style={checkoutbtn.checkoutbtn}></i></Col>
                </Row>

            </Card>
            <br />

            <Card style={{ width: '65%' }} href="/product-detail">
                <Row>
                    <Col>
                        <img variant="top" style={produc_image.style} src={proimg} />
                    </Col>

                    <Col>
                        <h2>sound</h2>
                    </Col>
                    <Col><i class="fa fa-times" aria-hidden="true" style={checkoutbtn.checkoutbtn}></i></Col>
                </Row>

            </Card>
            <br />

            <Card style={{ width: '65%' }} href="/product-detail">
                <Row>
                    <Col>
                        <img variant="top" style={produc_image.style} src={proimg} />
                    </Col>

                    <Col>
                        <h2>sound</h2>
                    </Col>
                    <Col><i class="fa fa-times" aria-hidden="true" style={checkoutbtn.checkoutbtn}></i></Col>
                </Row>

            </Card>
            <br />
            <Row>
                <Col >
                <h2 style={checkoutbtn.checkoutbtn}>Total=50</h2>
                </Col>
                <Col>
                    
                </Col>
                <Col>

                    <Button style={checkoutbtn.checkoutbtn}>Checkout</Button>
                </Col>
            </Row>
            <br />
        </div>
    );
};

export default Cart;