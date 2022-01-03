import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <title>{data.site.siteMetadata.title}</title>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout