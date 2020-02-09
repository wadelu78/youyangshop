import React from 'react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  return (
    <div className="page-footer">
      <div className="container">
        <div className="row" style={{ marginBottom: 0 }}>
          <div className="col l6 s12">
            <h5 className="white-text">Youyang Shop</h5>
            <p className="grey-text text-lighten-4">We only sell high quality products</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><Link className="grey-text text-lighten-3" to="admin">Admin</Link></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppFooter
