import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Link to="/">Home</Link>
  </Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>List Note</h1>
    <nav>
      { user && <span>Welcome, {user.first_name}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
