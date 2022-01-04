import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {footer, logo,} from'./footer.module.css'

const Footer = () => {
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
    <footer className={footer}>
        <a href="/" className={logo}>{data.site.siteMetadata.title}</a>
        <p>&copy;{new Date().getFullYear()} {data.site.siteMetadata.title}</p>
    </footer>
  )
}

export default Footer