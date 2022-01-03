import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Teaser from "../components/teaser"
import Banner from "../components/banner"
import {
   proContainer,
   proTextContainer,
   proImage,
   proDescription,
   proLogo,
   teaserBlock,
   teaserBlockDes,
   teasers
} from './pages.module.css'
import { btn1, btn2,} from '../components/banner.module.css'

const IndexPage = ({data: {wpPage: {homePageFields:home}}}) => {
  return(
      <Layout>
        {/* banner */}
        <Banner title={home.headerHome.title} tagline={home.headerHome.tagline}
        callToAction={home.callToAction} picture={home.headerHome.picture}/>
        {/* marvel movies */}
        <div className={teaserBlock}>
          <h2>{home.bestMarvelMovies.title}</h2>
          <p className={teaserBlockDes}>{home.bestMarvelMovies.description}</p>
          <div className={teasers}>{home.bestMarvelMovies.marvelMovies.map(movie =>{
           return <Teaser key={movie.id} slug={`marvel-movies/${movie.slug}`} 
            poster={movie.marvelMoviesFields.poster} title={movie.marvelMoviesFields.title}/>
          })}
          </div>
        </div>
         {/* Promotion */}
         <div className={proContainer}>
          <div className={proTextContainer}>
          <GatsbyImage
                  className={proLogo}
                  image={getImage(home.promotion.logo.localFile)}
                  alt={home.promotion.logo.altText}/>
          <p className={proDescription}>{home.promotion.description}</p>
          <a target="__blank" href={home.promotion.callToAction.link} className={`${btn1} ${btn2}`}>{home.promotion.callToAction.linkText}</a>
          </div>
          <GatsbyImage
                  className={proImage}
                  image={getImage(home.promotion.promotionPicture.localFile)}
                  alt={home.promotion.promotionPicture.altText}/>
        </div>
        {/* marvel tv shows */}
        <div className={teaserBlock}v>
          <h2>{home.bestMarvelTvShows.title}</h2>
          <p className={teaserBlockDes}>{home.bestMarvelTvShows.description}</p>
          <div className={teasers}>{home.bestMarvelTvShows.marvelTvShows.map(tvShow =>{
           return <Teaser key={tvShow.id} slug={`marvel-tv-shows/${tvShow.slug}`} 
            poster={tvShow.marvelTvShowsFields.poster} title={tvShow.marvelTvShowsFields.title}/>
          })}
          </div>
        </div>
  </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePageFields {
      headerHome {
        title
        tagline
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      callToAction {
        link
        linkText
      }
      bestMarvelMovies {
        title
        description
        marvelMovies {
          ... on WpMarvelMovie {
            id
            slug
            marvelMoviesFields {
              title
              poster {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
      bestMarvelTvShows {
        title
        description
        marvelTvShows {
          ... on WpMarvelTvShows {
            id
            slug
            marvelTvShowsFields {
              title
              poster {
                altText
                slug
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
      promotion {
        description
        logo {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        callToAction {
          link
          linkText
        }
        promotionPicture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
}
`
export default IndexPage
