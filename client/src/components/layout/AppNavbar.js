import React, { Fragment } from 'react'

const AppNavbar = () => {
  return (
    <Fragment>
      <nav className="blue">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"><i className="material-icons">store</i>Youyang Shop</a>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i> </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Login</a></li>
            <li><a href="badges.html">Register</a></li>
          </ul>
        </div>
      </nav>

      <ul id="nav-mobile" className="sidenav">
        <li><a href="sass.html">Login</a></li>
        <li><a href="badges.html">Register</a></li>
      </ul>
    </Fragment>
  )
}

export default AppNavbar
