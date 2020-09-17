import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogPreview from "../components/blog-preview"
// import styled from "styled-components"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My personal dev site</h1>

    <div class="text-center">
      <BlogPreview/>
    </div>

  </Layout>
)

export default IndexPage






