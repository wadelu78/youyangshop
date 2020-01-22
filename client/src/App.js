import React, { useEffect, useState } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import './App.css'

import axios from 'axios'

import AppNavbar from './components/layout/AppNavbar'
import ProductList from './components/ProductList'

const App = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('/api/products').then(res => setProducts(res.data))
  }, [])
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit()
  })
  return (
    <div className="App">
      <AppNavbar />
      <ProductList products={products} />
    </div>
  );
}

export default App;
