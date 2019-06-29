import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Photographs = () => (
  <Layout>
    <SEO title="Photographs" />
    <h1>Photographs</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Photographs
