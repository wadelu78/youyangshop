import React, { Fragment } from 'react'
import ProductItem from './ProductItem'
import Spinner from '../components/layout/Spinner'

const ProductList = ({ title, products, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <Fragment>
        <ul className="collection" style={{ marginTop: '0' }}>
          <li className="collection-item">
            <div>
              <span style={{ fontWeight: 'bold' }}>{title}</span>
              <a href="#!" className="secondary-content">
                <i className="material-icons grey-text text-darken-4">
                  more_horiz
                </i>
              </a>
            </div>
          </li>
        </ul>
        <div className="row">
          {products.map(product => {
            return <ProductItem key={product.product_id} product={product} />
          })}
        </div>
      </Fragment>
    )
  }
}

export default ProductList
