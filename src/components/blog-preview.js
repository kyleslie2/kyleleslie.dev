import React from "react"
// import PropTypes from "prop-types"
// import kebabCase from "lodash/kebabCase"
import { useStaticQuery, graphql, Link } from "gatsby"
import PreviewCard from "./blog-preview-card"
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
    .map(edge => <PreviewCard key={edge.node.id} post={edge.node} />)

  return (
      <div class="m-auto p-2" role="alert">
          <Link to='/blog/'><h2 class="self-center">Recent blog posts <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></h2></Link>
      <div class="flex center-items flex-wrap px-3">{PreviewPost}</div>
    </div>
  )
};




export default BlogPreview;





