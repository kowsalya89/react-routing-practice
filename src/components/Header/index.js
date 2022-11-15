// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="flex-container-navbar-1">
      <img
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="imagee"
      />
      <h1 className="heading-wave">Wave</h1>
    </div>
    <ul className="flex-container-navbar-2">
      <li className="list-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
