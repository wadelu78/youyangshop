import React from 'react'

const CartBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#cart-modal" className="btn-floating btn-large blue modal-trigger">
        <i className="large material-icons">shopping_cart</i>
      </a>
    </div>
  )
}

export default CartBtn
