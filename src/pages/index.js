import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Kyle Leslie" />
    <h1>Welcome to my site!</h1>
    <h2>Future home of my portfolio, blog, and random applications</h2>
    < p > I 'll have more here in the future, I promise <span role="img" aria-label="nervous emoji">&#128517;</span></p>
    < h3 > In the meantime, go check out my: </h3>
    < ul> 
    <li>< a href = "https://github.com/kyleslie2"> GitHub </a></li>
    <li>< a href = "https://twitter.com/KyleLeslie"> Twitter </a></li>
    <li>< a href = "https://instagram/kyleslie2"> Instagram </a></li>
    < li > < Link to = "/blog/" > Blog</Link>(Will be here in the future)</li>
    < li > < a href = "https://kyleslie2.github.io/lists/" > Lists </a></li>

    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
