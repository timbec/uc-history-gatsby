import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SendStuff = () => (
  <Layout>
    <SEO title="SendStuff" />
    <h1>Send Stuff</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SendStuff
