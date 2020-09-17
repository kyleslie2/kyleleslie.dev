import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// The preview box for blog posts
// TODO: fix tags display

const PostLink = ({ post }) => (
    <div class="max-w-xl rounded overflow-hidden shadow-lg p-3 flex-auto">
          <Link to={post.frontmatter.path}>
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                {post.frontmatter.title} ({post.frontmatter.date})
            </div>
            <p class="text-gray-700 text-base">
              {post.frontmatter.description}
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{post.frontmatter.tags[0]}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{post.frontmatter.tags[1]}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#{post.frontmatter.tags[2]}</span>
          </div>
          </Link>
        </div>
)

export default PostLink