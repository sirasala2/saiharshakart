import React, { useState } from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';

const Login = (props) => {
    return (
        <div>
            <br />
            <Container><Row>
                <Col></Col>
                <Col> <h2>LOGIN</h2>
                <br />
                <div>
                    Email
                 <br />
                    <input type="text" />
                </div>
                <div >
                    Password
                 <br />
                    <input type="password" />
                </div>
                <br />
                <div>
                    <button style={{textAlign:"center"  ,color:"white" , background:"blue"}}>login</button>
                </div>
                <br />
                </Col>
                <Col></Col>
            </Row></Container>

            <br />
        </div>
    );
}



export default Login;