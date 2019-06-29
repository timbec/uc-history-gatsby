import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="search-box">
      <input />
    </div>

    <figure className="minehead">
      <img src=""/>
    </figure>
    <div className="title-block">
    <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <p>Helping Keep Uranium City alive on the web.</p>
    </div>
      <figure className="minehead">
      <img src=""/>
    </figure>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
