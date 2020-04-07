/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
// import { isLoggedIn, logout } from '../services/auth'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>

        <li>
          <a href="http://fullstack.cash/profile" onClick={props.onToggleMenu} >
            Account
            </a>
        </li>

        <li>
          <a href="http://fullstack.cash/pricing" onClick={props.onToggleMenu} >
            Pricing
          </a>
        </li>

        <li>
          <a href="http://fullstack.cash/cashstrap" onClick={props.onToggleMenu} >
            CashStrap
          </a>
        </li>
        <li>
          <a href="http://fullstack.cash/contact" onClick={props.onToggleMenu} >
            Contact
          </a>
        </li>
        <li>
          <a href="http://fullstack.cash/free-access" onClick={props.onToggleMenu} >
            Free Access
          </a>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Explore
          </Link>
        </li>
      </ul>

      <ul className="actions vertical">
        <a href="http://fullstack.cash/login" className="button fit" onClick={props.onToggleMenu} >
          Log In
          </a>
      </ul>
    </div>

    <a className="close" onClick={props.onToggleMenu} href="#!">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu