import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import styled from "styled-components"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My personal dev site</h1>
    <p>More coming soon!</p>
    < Link to = "/giftideas/" > Go to my first markdown page </Link>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage






