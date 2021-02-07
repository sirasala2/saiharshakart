import React, { useState } from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
const Signup = (props) => {
  

    const forsignup = {
        forsignup: {
            color:"blue",
            float:"center"
        }
    }

    return (
        <div>
            <br />
            <Container><Row>
                <Col></Col>
                <Col> <h2>SIGNUP</h2>
                <br />
                <div>
                    Email
                 <br />
                    <input type="text" />
                </div>
                <div>
                    Confirm Email
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
                <button style={{textAlign:"center"  ,color:"white" , background:"blue"}}>signin</button>
                </div>
                <br />
                </Col>
                <Col></Col>
            </Row></Container>

            <br />
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (props) => {
        setValue(props.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Signup;