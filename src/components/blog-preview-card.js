import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// The preview box for blog posts (on index page)
// TODO: fix tags display

const PreviewLink = ({ post }) => (
    <div class="rounded overflow-hidden shadow-lg p-3 lg:w-1/3 md:w-1/2 sm:w-full sm:flex-wrap">
        <Link to={post.frontmatter.path}>
          <div class="card-img-top">
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
          <div class="px-3 py-3">
            <div class="font-bold text-xl mb-2">
                {post.frontmatter.title} ({post.frontmatter.date})
            </div>
            <p class="text-gray-800 text-base">
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

export default PreviewLink