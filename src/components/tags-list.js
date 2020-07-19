import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, useStaticQuery, graphql } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"



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

  // const { title } = data.site.siteMetadata;
  const { group } = data.allMarkdownRemark;

  return (
   <div>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
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




// `~~~~~~~~~~~~~~~~~`



// const Tags = ({ data }) => (
//   <div>
//       <ul>
//         {data.allMarkdownRemark.group.map(tag => (
//           <li key={tag.fieldValue}>
//             <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//               {tag.fieldValue} ({tag.totalCount})
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
// )

// export default function MyTags(props) {
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           site {
//             siteMetadata {
//               title
//             }
//           }
//           allMarkdownRemark(limit: 2000) {
//             group(field: frontmatter___tags) {
//               fieldValue
//               totalCount
//             }
//           }
//         }
//       `}
//       render={data => <Tags data={ {
//   data: {
//     allMarkdownRemark: {
//         group
//     },
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }} />}
//       // render={data => <Tags data={data} {...props} />}
//     />
//   )
// }

// Tags.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }





