import React, { useContext } from 'react'
import CartContext from '../context/cart/cartContext'

const CartItem = ({ cartItem }) => {
  const { product, quality } = cartItem
  const { product_id, name_chn } = product

  const cartContext = useContext(CartContext)

  const deleteItem = () => cartContext.deleteItem(product_id)
  const addToCart = () => cartContext.addToCart(product)
  const minusQuality = () => cartContext.minusQuality(product_id)

  return (
    <div className="collection-item">
      <p>{name_chn}<span className="badge red white-text">{quality}</span></p>
      <a className="waves-effect waves-light btn" onClick={deleteItem}>delete</a>{' '}
      <a className="waves-effect waves-light btn" onClick={addToCart}>+</a>{' '}
      <a className="waves-effect waves-light btn" onClick={minusQuality}>-</a>
    </div>
  )
}

export default CartItem
