import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {header, logo, menuBtn, menuIcon,menu, navIcon} from'./header.module.css'

const Header = () => {
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
  <header className={header}>
    <a href="/" className={logo}>{data.site.siteMetadata.title}</a>
    <input className={menuBtn} type="checkbox" id="menu-btn" />
    <label className={menuIcon} for="menu-btn"><span className={navIcon}></span></label>
    <ul className={menu}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/marvel-movies">Marvel Movies</Link></li>
      <li><Link to="/marvel-tv-shows">Marvel Tv Shows</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
    </ul>
</header>
  )
}

export default Header