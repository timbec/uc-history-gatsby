import React from 'react'

const Footer = () => {
    return (
            <footer>
            © {new Date().getFullYear()}, Uranium City History Project, built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
    )
}

export default Footer
