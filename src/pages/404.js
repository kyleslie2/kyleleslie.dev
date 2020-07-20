import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... that sucks.</p>
    <div style={{ fontSize: `90px`, marginTop: `10rem`, marginBottom: `1.45rem` }}>
      <p>¯\_(ツ)_/¯</p>
    </div> 
    </Layout>
)

export default NotFoundPage
