import React, { useState } from 'react'
import FileUpload from '../../utils/FileUpload'

const Admin = () => {
  const [product, setProduct] = useState({
    product_id: '',
    name_chn: '',
    recommend: false,
    popular: false,
    description: '',
    category: '',
    price: 0
  })

  const { product_id, name_chn, recommend, popular, description, category, price } = product

  const onChange = e => setProduct({ ...product, [e.target.name]: e.target.value })

  return (
    <div className="row">
      Dev: This is the admin page
      It should be protected by adminauth
      we can manage database here
      <h3 className="center-align">Add a product</h3>

      <form onSubmit className="col s10 offset-s1 m6 offset-m3 l4 offset-l4">
        <FileUpload />
        <br />
        <br />
        <div className="input-field">
          <input type="text" id='product_id' name='product_id' value={product_id} onChange={onChange} />
          <label htmlFor='product_id'>Enter the product id</label>
        </div>
      </form>



    </div>
  )
}

export default Admin
