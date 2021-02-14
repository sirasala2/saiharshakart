import React from 'react';
import { Col, Row } from 'react-bootstrap';
import proimg from '../assets/soundimg.jpeg';

const ProductDetail = () => {
    return (
        <div>
            <br />
            <Row>

                <Col style={{ margin: "60px" }}> <img src={proimg} /></Col>
                <Col><h2 >Name:Sound</h2>
                    <h2>price:100</h2>
                    <h2>size:</h2>
                    <h2>size:</h2>
                    <h2>size:</h2>
                </Col>

                <Col></Col>

            </Row>
            <br />
        </div>
    )
};


export default ProductDetail;