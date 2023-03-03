import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="listContainer">
    <Link to="/">
      <li className="lists">Home</li>
    </Link>
    <Link to="/about">
      <li>About</li>
    </Link>
  </ul>
)

export default Header
