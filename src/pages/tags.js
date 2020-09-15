import React from "react"
import PropTypes from "prop-types"
// import kebabCase from "lodash/kebabCase"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags-list"


//Could just import tags-list component here. Would be a staticquery instead of pagequery though (might not matter)

const TagsPage = ({
  data: {
    allMarkdownRemark: {
        group
    },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
        < SEO title = "Tags" / >
        <h1>Tags Page</h1>
        <p>Here is a list of all the blog tags!</p>
        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-2" role="alert">
          <p class = "text-sm" > Please excuse the brutal minimalism - this page hasn 't been styled yet. Getting the functionality right first.</p>
        </div>        
        <Tags/>
        {/* <div>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div> */}
    </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`