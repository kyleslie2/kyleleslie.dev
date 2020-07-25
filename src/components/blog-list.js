import React from "react"
// import PropTypes from "prop-types"
// import kebabCase from "lodash/kebabCase"
import { useStaticQuery, graphql } from "gatsby"
import PostLink from "./post-link"
// import Layout from "../components/layout"
// import SEO from "../components/seo"




const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query BlogPostQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
        <div style={{ marginTop: `1.45rem`, position: `inline-block` }}>{Posts}</div>
  )
};




export default BlogPosts;





