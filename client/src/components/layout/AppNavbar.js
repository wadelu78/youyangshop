import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const AppNavbar = () => {
  return (
    <Fragment>
      <nav className="blue">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo"><i className="material-icons">store</i>Youyang Shop</Link>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i> </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="user-login">Login</Link></li>
            <li><Link to="user-register">Register</Link></li>
          </ul>
        </div>
      </nav>

      <ul id="nav-mobile" className="sidenav">
        <li><Link to="user-login.html">Login</Link></li>
        <li><Link to="user-register.html">Register</Link></li>
      </ul>
    </Fragment>
  )
}

export default AppNavbar
