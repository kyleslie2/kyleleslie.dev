import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
    <SEO title={frontmatter.topic} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 class="font-sans">{frontmatter.title}</h1>
          <p class="font-sans">{frontmatter.description}<br/>Last updated: <i>{frontmatter.date}</i></p>
          <Img fluid={featuredImgFluid} />
          <br/>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
    </div>
    </Layout>

  )
}

export const pageQuery = graphql `
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        topic
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`