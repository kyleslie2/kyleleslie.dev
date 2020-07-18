import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"


// const Blog = () => (
//   <Layout>
//     < SEO title = "Blog" / >
//       <h1>Blog Page</h1>
//       <p>Blog posts will be displayed here!</p>
//       <p>I'm organizing my posts with <Link to ="/tags/">tags</Link></p>
//       <FullList/>
//     </Layout>
// )

// export default Blog



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
      <Link to ="/tags/">Tags</Link>
      
      <div style={{ marginTop: `1.45rem` }}>{Posts}</div>
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
          }
        }
      }
    }
  }
`
