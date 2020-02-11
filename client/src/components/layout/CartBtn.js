import React from "react";

const CartBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#cart-modal"
        className="btn-floating btn-large teal darken-2 modal-trigger"
      >
        <i className="large material-icons">shopping_cart</i>
      </a>
    </div>
  );
};

export default CartBtn;
