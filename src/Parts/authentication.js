import React, { useState } from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
const Login = (props) => {
    const username = useFormInput('');
    const password = useFormInput('');


    const handleLogin = () => {
        props.history.push('/login');
    }
    const checkoutbtn = {
        checkoutbtn: {
            float: 'right'
        }
    }

    return (
        <div>
            <br />
            <Container><Row><Col> Login
            <br />
                <br />
                <div>
                    Username
                 <br />
                    <input type="text" />
                </div>
                <div >
                    Password
                 <br />
                    <input type="password" />
                </div>

                <br />
                <input type="button" value={'Login'} onClick={handleLogin} />
                <br /></Col>
                <Col>
                    SignUp
            <br />
                    <br />
                    <div>
                        Username
                 <br />
                        <input type="text" />
                    </div>
                    <div >
                        Password
                 <br />
                        <input type="password" />
                    </div>

                    <br />
                    <input type="button" value={'Signup'} onClick={handleLogin} />
                    <br />
                </Col>
                <Col>
                    <h2 >hello</h2>
                </Col>
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

export default Login;