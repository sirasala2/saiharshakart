import React from 'react';
import {  Row, Container, Col } from 'react-bootstrap';
class Signup extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        user: {
            email: '',
            password: ''
        }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.email && user.password) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName:user.email,password: user.password })
            };
            fetch('http://localhost:3000/register', requestOptions)
                .then(response => response.json())
                .then(data => localStorage.setItem('userid',data[0]._id));
        }
    }
    render() {
        const { user} = this.state;
    return (
        <div>
            <br />
            <form name="form" onSubmit={this.handleSubmit}>
            <Container><Row>
                <Col></Col>
                <Col> <h2>SIGNUP</h2>
                <br />
                <div>
                    Email
                 <br />
                    <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                </div>
               
                <div >
                    Password
                 <br />
                    <input type="text" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                <button style={{textAlign:"center"  ,color:"white" , background:"blue"}}>signin</button>
                </div>
                <br />
                </Col>
                <Col></Col>
            </Row></Container>
</form>
            <br />
        </div>
    );
    }
}


export default Signup;