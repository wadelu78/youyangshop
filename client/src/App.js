import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


import './App.css'

import axios from 'axios'

import AppNavbar from './components/layout/AppNavbar'

import Home from './components/pages/Home'
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'

import CartBtn from './components/layout/CartBtn'
import CartModal from './components/layout/CartModal'

import ProductList from './components/ProductList'
import CartState from './context/cart/CartState'
import UserAuthState from './context/userAuth/UserAuthState'

import Cart from './components/Cart'



const App = () => {

  return (
    <Router>
      <CartState>
        <UserAuthState>
          <div className="App">
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user-register" component={UserRegister} />
              <Route exact path="/user-login" component={UserLogin} />
            </Switch>
          </div>
        </UserAuthState>
      </CartState>
    </Router>
  );
}

export default App;
