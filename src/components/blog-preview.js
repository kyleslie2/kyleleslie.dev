import React from "react"
// import PropTypes from "prop-types"
// import kebabCase from "lodash/kebabCase"
import { useStaticQuery, graphql } from "gatsby"
import PostLink from "./post-link"
// import Layout from "../components/layout"
// import SEO from "../components/seo"




const BlogPreview = () => {
  const data = useStaticQuery(graphql`
    query BlogPreviewQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] },limit: 3) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
    }
  }
  `);

  const { edges } =  data.allMarkdownRemark
  const PreviewPost = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div>
      <h2 class="self-center">Recent blog posts</h2>
        <div class="flex center-items flex-no-wrap px-3">{PreviewPost}</div>
    </div>
  )
};




export default BlogPreview;





