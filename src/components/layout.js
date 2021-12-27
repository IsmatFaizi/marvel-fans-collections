import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvel-movies">Marvel Movies</Link></li>
          <li><Link to="/marvel-tv-shows">Marvel Tv Shows</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout