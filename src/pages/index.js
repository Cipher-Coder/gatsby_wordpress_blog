import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Link from "gatsby-link"

const Home = () => {
  return (
    <Layout isHomePage>
      <Seo title="Home | Get Unedited" />
      <p>
        Check out our <Link to="/blog/">Blog</Link>
      </p>
    </Layout>
  )
}
export default Home
