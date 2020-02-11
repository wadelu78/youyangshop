import React, { useContext } from "react";
import CartContext from "../context/cart/cartContext";
import M from "materialize-css/dist/js/materialize.min.js";

const ProductItem = props => {
  const { mainImageAddress, name_chn, price } = props.product;

  const cartContext = useContext(CartContext);

  const addToCart = () => {
    //a toast info tells the user an product has been added into the shopping cart
    const toastHTML = `<i class="material-icons">add_shopping_cart</i>&nbsp<span>${name_chn}</span>&nbsp&nbsp<i class="material-icons">check</i>`;
    M.toast({ html: toastHTML });

    cartContext.addToCart(props.product);
  };

  return (
    <div className="col s6 m4 l3">
      <div className="card">
        <div className="card-image">
          <div className="container">
            <img src={mainImageAddress} alt="" className="responsive-img" />
          </div>
        </div>
        <div className="card-content center">
          <p
            className="grey-text text-darken-4"
            style={{ fontWeight: "bold", fontSize: "large" }}
          >
            {name_chn}
          </p>
          <span
            className="teal-text text-darken-2"
            style={{
              fontStyle: "italic",
              fontSize: "x-large",
              fontWeight: "bold"
            }}
          >
            ￥{price}
          </span>
        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s6">
              <i className="material-icons tiny yellow-text text-darken-1">
                star
              </i>
              <i className="material-icons tiny yellow-text text-darken-1">
                star
              </i>
              <i className="material-icons tiny yellow-text text-darken-1">
                star
              </i>
              <i className="material-icons tiny yellow-text text-darken-1">
                star
              </i>
              <i className="material-icons tiny yellow-text text-darken-1">
                star_half
              </i>
            </div>
            <div className="col s6">
              <a
                className="waves-effect waves-light btn grey darken-2 secondary-content"
                onClick={addToCart}
              >
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
