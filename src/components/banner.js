import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { banner, textOnImage, btn1, btn2, bannerImage} from './banner.module.css'


const Banner = ({title,tagline, picture,callToAction}) => {
return (
  <div className={banner}>
    <GatsbyImage
    className={bannerImage}
      image={getImage(picture.localFile)}
      alt={picture.altText}/>
  <div className={textOnImage}>
  <h1>{title}</h1>
  <p>{tagline}</p>
  {callToAction!=null ? <a target="__blank" href={callToAction.link} className={`${btn1} ${btn2}`}>{callToAction.linkText}</a>:null}
  </div>
  </div>  
)
}

export default Banner;
