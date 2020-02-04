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
import Alerts from './components/layout/Alerts'

import CartBtn from './components/layout/CartBtn'
import CartModal from './components/layout/CartModal'

import ProductList from './components/ProductList'
import CartState from './context/cart/CartState'
import UserAuthState from './context/userAuth/UserAuthState'
import AlertState from './context/alert/AlertState'

import Cart from './components/Cart'

import setUserAuthToken from './utils/setUserAuthToken'

if (localStorage.token) {
  setUserAuthToken(localStorage.token)
}

const App = () => {

  return (
    <Router>
      <CartState>
        <UserAuthState>
          <AlertState>
            <div className="App">
              <AppNavbar />
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user-register" component={UserRegister} />
                <Route exact path="/user-login" component={UserLogin} />
              </Switch>
            </div>
          </AlertState>
        </UserAuthState>
      </CartState>
    </Router>
  );
}

export default App;
