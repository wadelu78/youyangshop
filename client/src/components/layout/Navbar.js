import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import UserAuthContext from "../../context/userAuth/userAuthContext";

const Navbar = () => {
  const userAuthContext = useContext(UserAuthContext);

  const { isAuthenticated, logoutUser, user } = userAuthContext;

  const onLogout = () => {
    logoutUser();
  };
  const userAuthLinks = (
    <Fragment>
      <nav className="blue">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            {/* <i className="material-icons">store</i>Youyang Shop */}
            <img src="logo192.png" width="40" height="auto" />
          </Link>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>{" "}
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="user-detail">Hello {user && user.username}</Link>
            </li>
            <li>
              <Link to="#" onClick={onLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul id="nav-mobile" className="sidenav">
        <li>
          <Link to="user-detail">Hello {user && user.username}</Link>
        </li>
        <li>
          <Link to="#" onClick={onLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <nav className="grey lighten-3">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            {/* <i className="material-icons">store</i>Youyang Shop */}
            <img
              src="cart-logo.png"
              width="auto"
              height="40px"
              // className="responsive-img"
            />
            <span className="grey-text text-darken-4">Youyang Shop</span>
          </Link>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons grey-text text-darken-4">menu</i>{" "}
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link
                to="user-login"
                className="grey-text text-darken-4 nav-link-font"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="user-register"
                className="grey-text text-darken-4 nav-link-font"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul id="nav-mobile" className="sidenav">
        <li>
          <Link to="user-login">Login</Link>
        </li>
        <li>
          <Link to="user-register">Register</Link>
        </li>
      </ul>
    </Fragment>
  );

  return isAuthenticated ? userAuthLinks : guestLinks;
};

export default Navbar;
