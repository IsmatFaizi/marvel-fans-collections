import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  '../multi-carousel.css'
import {
  detailContainer, 
  detailPoster,
  detailText,
  trailer,
  subDetail,
  cast,
  picturesContaier,
  pictures
} from '../pages.module.css'
import { btn1, btn2,} from '../../components/banner.module.css'


const MarvelMoviePage = ({
  data:{
    wpMarvelMovie:{
      marvelMoviesFields:movie,
      genres:{nodes:ganres}
    }}}) => {
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };
  return (
    <Layout>
      <div>
      <div className={picturesContaier}>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={false}
            customTransition="all 1s"
            transitionDuration={500}
          >
            <GatsbyImage 
              className={pictures}
              image={getImage(movie.pictures.picture1.localFile)} 
              alt={movie.pictures.picture1.altText} />
            <GatsbyImage 
              className={pictures}
              image={getImage(movie.pictures.picture2.localFile)} 
              alt={movie.pictures.picture2.altText} />
            <GatsbyImage
              className={pictures} 
              image={getImage(movie.pictures.picture3.localFile)} 
              alt={movie.pictures.picture3.altText} />
          </Carousel>
        </div>
        <div className={detailContainer}>
            <GatsbyImage className={detailPoster} image={getImage(movie.poster.localFile)} alt={movie.poster.altText} />
          <div className={detailText}>
              <h1>{movie.title}</h1>
              <p className={subDetail}><span>{movie.runTime}</span> - <span>{movie.releaseDate}</span> - <span>{movie.budget}</span></p>
              <p>{ganres.map((ganre, i) => (
                <span>{ganre.name}{i + 1 < ganres.length && ", "}</span>
              ))}</p>
              <p>{movie.description}</p>
              <p><span className={cast}>CAST: </span>{movie.cast}</p>
              <div className={trailer}>
                <a className={`${btn1} ${btn2}`} target="__blank" href={movie.trailer.link}>{movie.trailer.linkText}</a>
              </div>
          </div>
        </div>
       
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpMarvelMovie(id: {eq: $id}) {
    marvelMoviesFields {
      title
      description
      budget
      releaseDate
      runTime
      cast
      poster {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      pictures {
        picture1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      trailer {
        linkText
        link
      }
    }
    genres {
      nodes {
        name
      }
    }
  }
}
`

export default MarvelMoviePage