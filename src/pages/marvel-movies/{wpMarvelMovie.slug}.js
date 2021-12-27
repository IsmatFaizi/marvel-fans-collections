import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const MarvelMoviePage = ({data:{wpMarvelMovie:{marvelMoviesFields:movie}}}) => {
  const image = getImage(movie.poster.localFile)
  return (
    <Layout>
     <div>
            <GatsbyImage image={getImage(movie.poster.localFile)} alt={movie.poster.altText} />
            <div>
                <h1>{movie.title}</h1>
                <p>Description: <span>{movie.description}</span></p>
                <p>ReleaseDate: <span>{movie.releaseDate}</span></p>
                <p>Cast: <span>{movie.cast}</span></p>
                <p>Runtime: <span>{movie.runTime}</span></p>
                <p>Budget: <span>{movie.budget}</span></p>
            </div>
            <div>
                <a target="__blank" href={movie.trailer.link}>{movie.trailer.linkText}</a>
            </div>
            <div>
            <GatsbyImage 
                image={getImage(movie.pictures.picture1.localFile)} 
                alt={movie.pictures.picture1.altText} />
             <GatsbyImage 
                image={getImage(movie.pictures.picture2.localFile)} 
                alt={movie.pictures.picture2.altText} />
                 <GatsbyImage 
                image={getImage(movie.pictures.picture3.localFile)} 
                alt={movie.pictures.picture3.altText} />
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
  }
}
`

export default MarvelMoviePage