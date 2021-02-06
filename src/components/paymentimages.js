import React from 'react';
import {  Row,  Col } from 'react-bootstrap';
import Gpay from '../assets/gpay-does-not-need-rbi-authorisation-as-not-a-payment-system-operator-google-to-hc.jpg';
import Paytm from '../assets/ps7F6pGI.jpg';
import Phonepay from '../assets/phone-pay-image.jpg';
const Paymentimages = () => {

    

    return (
    <div>
        <h2 style={{textAlign:"center" , textDecoration:"underline" ,color:"grey"}}>We Accept</h2>
        <br />
        <Row>
            <Col style={{textAlign:"center"}} >
            <img src={Gpay} />
            </Col>

            <Col style={{textAlign:"center"}} ><img  src={Phonepay}/></Col>
            <Col style={{textAlign:"center"}}><img  src={Paytm} /></Col>
        </Row>
    </div>
    )
};


export default Paymentimages;