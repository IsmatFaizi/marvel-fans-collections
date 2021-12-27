import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Teaser = ({poster, title, slug})=>{
    console.log(poster)
    return(
        <Link to={slug}>
            <GatsbyImage
                image={getImage(poster.localFile)}
                alt={poster.altText}/>
                <div>
                    <p>{title}</p>
                </div>
        </Link>
    )
}

export default Teaser;