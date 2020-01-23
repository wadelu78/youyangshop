import React, { Fragment } from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {
  return (
    <Fragment>
      <h5>{props.title}</h5>
      <div className="row">
        {props.products.map(product => {
          return <ProductItem key={product.product_id} product={product} />
        })}
      </div>
    </Fragment>
  )
}

export default ProductList
