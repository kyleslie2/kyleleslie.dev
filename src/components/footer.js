import React from "react"
import FooterStyles from "./footer.module.css"


const Footer = () => (
  <footer className={FooterStyles.footer}>
    <div>
     <p className={FooterStyles.text}>
        Site developed by Kyle Leslie © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    
    </div>
  </footer>
)



export default Footer

