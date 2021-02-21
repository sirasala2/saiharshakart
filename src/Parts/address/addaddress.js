import React from 'react';
import { Button, Row,  Col } from 'react-bootstrap';

class Address extends React.Component{
  state = {
    isLoading: true,
    addresses: [],
    error: null
  }
  fetchProducts() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        userid:localStorage.getItem('userid')
    })
  };
  fetch('http://localhost:3000/getaddresses', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({
        addresses: data,
        isLoading: false,
      }));

  }
  componentDidMount() {
    this.fetchProducts();
  };
  render() {
    const { isLoading, addresses } = this.state;
  return (
   
    <React.Fragment>
      <Row style={{margin:"10px"}}>
      <div>
      <button>Add Address</button>
          {!isLoading ? (
            addresses.map(address => {
              const { firstname, lastname, phone } = address;
              return (
                
                <Col style={{border:"1px solid", borderColor:"grey",borderRadius:"5px",margin:"10px",width:"20%"}}>
          {/* <img src={img} /> */}
          <h2>{firstname}</h2>
          <h2>{lastname}</h2>
          <h2>{phone}</h2>
          <Button href="/product-detail">Edit
          </Button>
        </Col>
        
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
        
      </Row>
      </React.Fragment>

  );
  }
};


export default Address;