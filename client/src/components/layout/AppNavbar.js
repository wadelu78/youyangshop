import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserAuthContext from '../../context/userAuth/userAuthContext'

const AppNavbar = () => {
  const userAuthContext = useContext(UserAuthContext)

  const { isAuthenticated, logoutUser, user } = userAuthContext

  const onLogout = () => {
    logoutUser()
  }
  const userAuthLinks = (
    <Fragment>
      <nav className="blue">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo"><i className="material-icons">store</i>Youyang Shop</Link>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i> </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="user-detail">Hello {user && user.username}</Link></li>
            <li><Link to="#" onClick={onLogout}>Logout</Link></li>
          </ul>
        </div>
      </nav>

      <ul id="nav-mobile" className="sidenav">
        <li><Link to="user-detail">Hello {user && user.username}</Link></li>
        <li><Link to="#" onClick={onLogout}>Logout</Link></li>
      </ul>
    </Fragment>
  )

  const guestLinks = (
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
        <li><Link to="user-login">Login</Link></li>
        <li><Link to="user-register">Register</Link></li>
      </ul>
    </Fragment>
  )

  return (
    isAuthenticated ? userAuthLinks : guestLinks
  )
}

export default AppNavbar
