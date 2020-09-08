import React from "react"
import Logo from "../images/logo.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <SEO title="Home" />
    <img src={Logo} alt="Logo" height="800" />
    <h1>Something new is coming!</h1>
  </div>
)

export default IndexPage
