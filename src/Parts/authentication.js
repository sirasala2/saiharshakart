import React from 'react';
import {Row,Col, Button} from 'react-bootstrap';
import Login from './login';
import Signup from './signup';

const Auth = () => {
    return(
        <div>
            <br />
            <Row>
                <Col></Col>
                <Col>
                   <Button href="/auth/login">Login</Button>
                </Col>
                <Col>
                <Button href="/auth/signup">Signup</Button>
                </Col>
                <Col></Col>
            </Row>
            <br />
        </div>
    )
};


export default Auth;