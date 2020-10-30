import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/Blog/post-link"
import Tags from "../components/Tags/tags-list"

const BlogList = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog Posts</h1>
      <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-2" role="alert">
        <p class = "text-sm" > Please excuse the brutal minimalism - this page hasn 't been styled yet. Getting the functionality right first.</p>
      </div>
      <div class="flex">
        < div class = "flex-auto px-4 py-2 m-2 items-center bg-gray-400" >
          <Link to ="/tags/"><h2 class="px-4 py-2 m-2">Tags</h2></Link>
          <Tags/>
        </div>
        <div class="flex-auto text-center items-center px-4 py-2 m-2">
          <h2 class="px-4 py-2 m-2">Recent posts</h2>
          {Posts}
        </div>
      </div>
    </Layout>
    )
}

export default BlogList



export const pageQuery = graphql`
  query {
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
`
