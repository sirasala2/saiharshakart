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
import Login from './Parts/login';


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
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/product-detail" exact>
          <ProductDetail />
        </Route>
        <Route path="/auth/login" exact>
          <Login />
        </Route>
        <Route path="/auth/signup" exact>
          <Signup />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
