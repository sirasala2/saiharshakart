import React from 'react';

import companyLogo from '../assets/banner.jpg';
import Product from '../../src/Parts/product';
import Paymentimages from '../components/paymentimages';
const Harshacart = () => {
    const mystyle = {
        height: "auto",
        width: "100vw"
    };
    const header_feature = {
        bold: {fontWeight: 'bold',color:"grey",marginLeft:"10px"},
        
    };
    return (
        <div>
        <img style={mystyle} src={companyLogo} alt="BigCo Inc. logo"/>
        <h2 style={header_feature.bold}>Feature products</h2>
        <Product/>
        <br />
        <Paymentimages />
        <br />
      </div>
    

    );
};

export default Harshacart;