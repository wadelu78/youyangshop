import React, { useContext } from 'react'
import CartContext from '../context/cart/cartContext'
import M from 'materialize-css/dist/js/materialize.min.js'

const ProductItem = (props) => {
  const { mainImageAddress, name_chn, price } = props.product

  const cartContext = useContext(CartContext)

  const addToCart = () => {
    //a toast info tells the user an product has been added into the shopping cart
    const toastHTML = `<i class="material-icons">add_shopping_cart</i>&nbsp<span>${name_chn}</span>&nbsp&nbsp<i class="material-icons">check</i>`
    M.toast({ html: toastHTML })

    cartContext.addToCart(props.product)
  }

  return (
    <div className="col s6 m4 l3">
      <div className="card">
        <div className="card-image">
          <div className="container">
            <img src={mainImageAddress} alt="" className="responsive-img" />
          </div>
        </div>
        <div className="card-content">
          <p>{name_chn}</p>
        </div>
        <div className="card-action">

          <p>￥{price}</p>
          <a className="waves-effect waves-light btn" onClick={addToCart}>Add to Cart</a>

        </div>
      </div>
    </div>
  )
}

export default ProductItem
