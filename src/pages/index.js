import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo-main.png"
import Phone from "../images/phone.png"

const IndexPage = () => (
  <Layout>
    <SEO title="EduHack 2019" />
    <p></p>
  
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={Logo} />
      <Link to="/page-2/"><p style={{textAlign: 'center'}}>Sign Up</p></Link>
      <p style={{textAlign: 'center'}}>Add to Calendar</p>  
      
      <img src={Phone} />

    </div>  
    
  </Layout>
)

export default IndexPage
