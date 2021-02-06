import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Facebook from '../assets/Facebook-logo-500x350.png';


const style = {
  backgroundColor: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "bottom",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  color: "green"
}

const font ={
  color:"green"
}


const Footer=() => {
  return (
      <div>
          
            <Row style ={style} >
              <Col><h2>Terms & Conditions</h2></Col>
              <Col><h2>Policy</h2></Col>
              <Col><h2>About us</h2></Col>
              <Col>
              <h2>Social</h2>
              <img src={Facebook} />
              <img src={Facebook} />
              <img src={Facebook} />
              </Col>
            </Row>
          
      </div>
  )
};

export default Footer;