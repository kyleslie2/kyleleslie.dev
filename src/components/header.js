import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"


const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerTitle}>
      <h1>
        <Link to="/" style={{color: `white`,textDecoration: `none`,}}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
