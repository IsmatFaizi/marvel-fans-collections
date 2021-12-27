import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const marvelTvShowsPage =({data:{wpMarvelTvShows:{marvelTvShowsFields:tvShow}}})=>{
    return(
    <Layout>
        <div>
            <GatsbyImage image={getImage(tvShow.poster.localFile)} alt={tvShow.poster.altText} />
            <div>
                <h1>{tvShow.title}</h1>
                <p>Description: <span>{tvShow.description}</span></p>
                <p>ReleaseDate: <span>{tvShow.releaseDate}</span></p>
                <p>Cast: <span>{tvShow.cast}</span></p>
                <p>Number of seasons: <span>{tvShow.numberOfSeasons}</span></p>
                <p>Number of episodes: <span>{tvShow.numberOfEpisodes}</span></p>
                <p>Budget: <span>{tvShow.budget}</span></p>
            </div>
            <div>
                <a target="__blank" href={tvShow.trailer.link}>{tvShow.trailer.linkText}</a>
            </div>
            <div>
            <GatsbyImage 
                image={getImage(tvShow.pictures.picture1.localFile)} 
                alt={tvShow.pictures.picture1.altText} />
             <GatsbyImage 
                image={getImage(tvShow.pictures.picture2.localFile)} 
                alt={tvShow.pictures.picture2.altText} />
                 <GatsbyImage 
                image={getImage(tvShow.pictures.picture3.localFile)} 
                alt={tvShow.pictures.picture3.altText} />
            </div>
        </div>
    </Layout>)
}

export const query = graphql`
query ($id: String) {
    wpMarvelTvShows(id: {eq: $id}) {
      marvelTvShowsFields {
        title
        description
        releaseDate
        cast
        budget
        numberOfEpisodes
        numberOfSeasons
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
    }
  }  
`

export default marvelTvShowsPage