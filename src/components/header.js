import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Header = ({title,tagline, picture,callToAction}) => {
return (
  <div>
  <h1>{title}</h1>
  <p>{tagline}</p>
  {callToAction!=null ? <a target="__blank" href={callToAction.link}>{callToAction.linkText}</a>:null}
  <GatsbyImage
      image={getImage(picture.localFile)}
      alt={picture.altText}/>
  </div>  
)
}

export default Header;
