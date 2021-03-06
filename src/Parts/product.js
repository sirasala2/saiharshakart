import React from 'react';
import proimg from '../assets/soundimg.jpeg'
import { Button, Row,  Col } from 'react-bootstrap';

class Product extends React.Component{
  state = {
    isLoading: true,
    products: [],
    error: null
  }
  fetchProducts() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ storeid: "603234635ffda7129cf662b6" })
  };
  fetch('http://localhost:3000/getproductsbystoreid', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({
        products: data,
        isLoading: false,
      }));

  }
  componentDidMount() {
    this.fetchProducts();
  };
  render() {
    const { isLoading, products } = this.state;
  return (
    <React.Fragment>
      <Row style={{margin:"10px"}}>
      <div>
          {!isLoading ? (
            products.map(product => {
              const { productname, size, price } = product;
              return (
                
                <Col style={{border:"1px solid", borderColor:"grey",borderRadius:"5px",margin:"10px",width:"20%"}}>
          {/* <img src={img} /> */}
          <h2>{productname}</h2>
          <h2>{size}</h2>
          <h2>{price}</h2>
          <Button href="/product-detail">details
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


export default Product;