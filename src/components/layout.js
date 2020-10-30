/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"


// import Header from "./header"
import Footer from "./Footer/footer"
import "./layout.css"
import Navbar from "./Navbar/Navbar"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Navbar siteTitle={data.site.siteMetadata.title}/>
      {/* Notification banner */}
      <Link to="/mysite/">
        <div class="flex mb-8 bg-indigo-800 text-center items-center py-0 w-full lg:px-0 lg:w-full">
          <div class="m-auto p-2 items-center text-white leading-none flex" role="alert">
            <span class="flex rounded-full bg-blue-700 uppercase px-2 py-1 text-xs font-bold mr-3 font-sans">Note</span>
            <span class="font-semibold mr-2 text-left flex-auto font-sans">This site is in active development. Read about the process here.</span>
            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
          </div>
        </div>
      </Link>

      <div
        style={{
          margin: `0 auto`,
          marginBottom: '0',
          maxWidth: 1160,
          // maxWidth: 1000,
          padding: `0 1.0875rem 1.45rem`,
          minHeight: `100vh`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
