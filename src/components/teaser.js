import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {teaserContainer, teaserImage, teaserTitle} from './teaser.module.css'
const Teaser = ({poster, title, slug})=>{
    console.log(poster)
    return(
        <div className={teaserContainer}>
        <Link to={slug}>
            <GatsbyImage
                className={teaserImage}
                image={getImage(poster.localFile)}
                alt={poster.altText}/>
               <p className={teaserTitle}>{title}</p>
        </Link>
        </div>
    )
}

export default Teaser;