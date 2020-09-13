import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogList from "../components/blog-list"
// import styled from "styled-components"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My personal dev site</h1>
    <p>More coming soon!</p>
    <p> Go to my rough, but functional < Link to = "/blog/" > blog page! </Link></p >
    <p> I've started organizing my pages with < Link to = "/tags/" > tags too! </Link></p >
    <BlogList/>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage






