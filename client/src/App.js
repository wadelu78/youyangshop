import React, { useEffect, useState } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


import './App.css'

import axios from 'axios'

import AppNavbar from './components/layout/AppNavbar'
import CartBtn from './components/layout/CartBtn'
import CartModal from './components/layout/CartModal'

import ProductList from './components/ProductList'
import CartState from './context/cart/CartState'

import Cart from './components/Cart'



const App = () => {
  //all types of  products
  const [recommendProduct, setRecommendProduct] = useState([])
  const [popularProduct, setPopularProduct] = useState([])
  const [infantMilkPowder, setInfantMilkPowder] = useState([])
  const [adultMilkPowder, setAdultMilkPowder] = useState([])
  const [honey, setHoney] = useState([])
  const [health, setHealth] = useState([])


  useEffect(() => {
    axios.get('/api/products').then(res => {
      setRecommendProduct(res.data.recommendProducts)
      setPopularProduct(res.data.popularProducts)
      setInfantMilkPowder(res.data.infantMilkPowder)
      setAdultMilkPowder(res.data.adultMilkPowder)
      setHoney(res.data.honey)
      setHealth(res.data.health)
    })
  }, [])
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit()
  })
  return (
    <CartState>
      <div className="App">
        <AppNavbar />
        <CartBtn />
        <CartModal />
        <ProductList title="Recommend Products" products={recommendProduct} />
        <ProductList title="Popular Products" products={popularProduct} />
        <ProductList title="Infant Milk Powder" products={infantMilkPowder} />
        <ProductList title="Adult Milk Powder" products={adultMilkPowder} />
        <ProductList title="Honey" products={honey} />
        <ProductList title="Health" products={health} />
      </div>
    </CartState>
  );
}

export default App;
