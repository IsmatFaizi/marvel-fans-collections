import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Teaser from "../components/teaser"
import Header from "../components/header"

const IndexPage = ({data: {wpPage: {homePageFields:home}}}) => {
  return(
      <Layout>
        {/* header */}
        <Header title={home.headerHome.title} tagline={home.headerHome.tagline}
        callToAction={home.callToAction} picture={home.headerHome.picture}/>
        {/* Promotion */}
        <div>
          <p>{home.promotion.description}</p>
          <a target="__blank" href={home.promotion.callToAction.link}>{home.promotion.callToAction.linkText}</a>
          <GatsbyImage
                  image={getImage(home.promotion.logo.localFile)}
                  alt={home.promotion.logo.altText}/>
          <GatsbyImage
                  image={getImage(home.promotion.promotionPicture.localFile)}
                  alt={home.promotion.promotionPicture.altText}/>
        </div>
        {/* marvel movies */}
        <div>
          <h2>{home.bestMarvelMovies.title}</h2>
          <p>{home.bestMarvelMovies.description}</p>
          <div>{home.bestMarvelMovies.marvelMovies.map(movie =>{
           return <Teaser key={movie.id} slug={`marvel-movies/${movie.slug}`} 
            poster={movie.marvelMoviesFields.poster} title={movie.marvelMoviesFields.title}/>
          })}
          </div>
        </div>
        {/* marvel tv shows */}
        <div>
          <h2>{home.bestMarvelTvShows.title}</h2>
          <p>{home.bestMarvelTvShows.description}</p>
          <div>{home.bestMarvelTvShows.marvelTvShows.map(tvShow =>{
           return <Teaser key={tvShow.id} slug={`marvel-tv-show/${tvShow.slug}`} 
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
                    gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
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
                    gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
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
