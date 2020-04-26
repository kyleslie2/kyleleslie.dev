import React from "react"

const Footer = () => {
  return (
    <footer>
      <p>
        Site developed by Kyle Leslie © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer