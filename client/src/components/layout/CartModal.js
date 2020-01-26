import React, { useContext } from 'react'
import CartItem from '../CartItem'
import CartContext from '../../context/cart/cartContext'


const CartModal = () => {
  const cartContext = useContext(CartContext)

  const { cart } = cartContext

  return (
    <div id="cart-modal" className="modal">
      <div className="container">
        <h3>Shopping cart content:</h3>
        <div className="collection">
          {cart.map(item => (
            <CartItem key={item.product.product_id} cartItem={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CartModal
