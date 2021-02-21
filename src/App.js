import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Auth from './Parts/authentication';
import Cart from './Parts/cart';
import Harshacart from './Parts/harshacart';
import ProductDetail from './ProductDetails/productdetail.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from '../src/components/NavigationBar';
import Footer from './components/footer';
import Categories from './components/Categories';
import Signup from './Parts/signup';
import FilesUploadComponent from './fileupload';
import Address from './Parts/address/addaddress';



const App = () => {
  return (

    <Router>
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Categories />
        </Router>
      </React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Harshacart />
        </Route>
        <Route path="/login" exact>
          <Auth />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/product-detail" exact>
          <ProductDetail />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/fu" exact>
          <FilesUploadComponent />
        </Route>
        <Route path="/getaddresses" exact>
          <Address />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
