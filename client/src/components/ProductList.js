import React, { Fragment } from "react";
import ProductItem from "./ProductItem";

const ProductList = props => {
  return (
    <Fragment>
      <ul className="collection" style={{ marginTop: "0" }}>
        <li className="collection-item">
          <div>
            <span style={{ fontWeight: "bold" }}>{props.title}</span>
            <a href="#!" className="secondary-content">
              <i className="material-icons grey-text text-darken-4">
                more_horiz
              </i>
            </a>
          </div>
        </li>
      </ul>
      <div className="row">
        {props.products.map(product => {
          return <ProductItem key={product.product_id} product={product} />;
        })}
      </div>
    </Fragment>
  );
};

export default ProductList;
