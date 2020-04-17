import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog stuff" />
    <h1>Hi from a future blog page</h1>
    <p>I'll post random stuff here once a month or so, mostly for myself</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
