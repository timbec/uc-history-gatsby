import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Places = () => (
  <Layout>
    <SEO title="Places" />
    <h1>Places</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Places
