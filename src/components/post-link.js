import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// const tags = post.frontmatter.tags


const PostLink = ({ post }) => (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              <Link to={post.frontmatter.path}>
                {post.frontmatter.title} ({post.frontmatter.date})
              </Link>
            </div>
            <p class="text-gray-700 text-base">
              {post.frontmatter.description}
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
          </div>
        </div>
)

export default PostLink