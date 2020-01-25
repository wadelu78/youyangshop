import React, { Fragment, useContext } from 'react'
import CartItem from './CartItem'
import CartContext from '../context/cart/cartContext'


const Cart = () => {

  const cartContext = useContext(CartContext)

  const { cart } = cartContext

  return (
    <Fragment>

      <div className="container">
        <h3>Shopping cart, should be a single page later</h3>
        <div className="collection">
          {cart.map(item => (
            <CartItem key={item.product.product_id} cartItem={item} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Cart
