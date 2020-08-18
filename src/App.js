import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Component/Header';
import Home from './Component/Home/Home';
import Checkout from './Component/Home/Checkout/Checkout';

import Login from './Component/Home/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/" >
          <Header />
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
