import React from 'react'

const CartItem = ({ cartItem }) => {
  const { product, quality } = cartItem
  const { name_chn } = product

  return (
    <div className="collection-item">
      <p>{name_chn}{'  '}<span className="badge blue white-text">{quality}</span></p>
      <a className="waves-effect waves-light btn">delete</a>
    </div>
  )
}

export default CartItem
