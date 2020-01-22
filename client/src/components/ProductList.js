import React from 'react'

const ProductList = (props) => {
  return (
    <div>
      {props.products.forEach(product => {
        console.log(product.product_id)
      })}
    </div>
  )
}

export default ProductList
