import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, useStaticQuery, graphql } from "gatsby"


const Tags = () => {
  const data = useStaticQuery(graphql`
    query TagListQuery {
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
  `);

  const { group } = data.allMarkdownRemark;

  return (


   <div>
      <ul>
        {group.map(tag => (
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
          <li class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 list-none" key={tag.fieldValue}>
              #{tag.fieldValue} ({tag.totalCount})
          </li>
            </Link>
        ))}
      </ul>
    </div>
  )
};


Tags.propTypes = {
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

export default Tags;




