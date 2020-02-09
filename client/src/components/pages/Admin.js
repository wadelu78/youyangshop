import React, { useState, useEffect } from 'react'
import FileUpload from '../../utils/FileUpload'
import M from 'materialize-css/dist/js/materialize.min.js'

const Admin = () => {
  const [product, setProduct] = useState({
    product_id: '',
    name_chn: '',
    recommend: 'no',
    popular: 'no',
    description: '',
    category: '',
    price: 0
  })

  useEffect(() => {
    M.AutoInit()
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
        <div className="input-field">
          <input type="text" id="product_id" name="product_id" value={product_id} onChange={onChange} />
          <label htmlFor='product_id'>Enter the product id</label>
        </div>
        <br />

        <div className="input-field">
          <input type="text" id='name_chn' name='name_chn' value={name_chn} onChange={onChange} />
          <label htmlFor='name_chn'>Enter the CHN name</label>
        </div>
        <br />

        <h5>Recommend product?</h5>
        <br />
        <label>
          <input name="recommend" type="radio" value={'no'} checked={recommend === 'no'} onChange={onChange} />
          <span>No</span>
        </label>&nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input name="recommend" type="radio" value={'yes'} checked={recommend === 'yes'} onChange={onChange} />
          <span>Yes</span>
        </label>
        <br />

        <h5>Popular product?</h5>
        <br />
        <label>
          <input name="popular" type="radio" value={'no'} checked={popular === 'no'} onChange={onChange} />
          <span>No</span>
        </label>&nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input name="popular" type="radio" value={'yes'} checked={popular === 'yes'} onChange={onChange} />
          <span>Yes</span>
        </label>
        <br />
        <br />

        <div className="input-field">
          <textarea id="description" name='description' value={description} onChange={onChange} className='materialize-textarea' />
          <label htmlFor='description'>Enter the product description</label>
        </div>
        <br />
        <br />

        <div className="input-field">
          <select onChange={onChange}>
            <option value="infant milkpowder">infant milkpowder</option>
            <option value="adult milkpowder">adult milkpowder</option>
            <option value="honey">honey</option>
            <option value="health">health</option>
          </select>
          <label>Category</label>
        </div>
        <br />
        <br />

        <div className="input-field">
          <input type="number" id="price" name="price" value={price} onChange={onChange} />
          <label htmlFor='price'>Enter the product price</label>
        </div>
        <br />
        <br />

        <div className="input-field center-align">
          <button className="btn waves-effect waves-light" type="submit" name="action">Add
    <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Admin
