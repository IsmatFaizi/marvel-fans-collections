import { graphql,Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Header from "../../components/header"
import Teaser from "../../components/teaser"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const MarvelMovies = ({
  data: {
    wpPage: {marvelMoviesPageFields:{headerMarvelMovies}},
    allWpMarvelMovie: {edges:moviesPage} 
    }}) =>{
    return (
        <Layout>
          <Header title={headerMarvelMovies.title} 
          tagline={headerMarvelMovies.tagline} 
          picture={headerMarvelMovies.pricture}/>
           {moviesPage.map((item)=>{
            const movie = item.node.marvelMoviesFields;
               return <Teaser key={item.node.id} slug={`/marvel-movies/${item.node.slug}`}
               poster={movie.poster} title={movie.title}/>
           })}
        </Layout>
    )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "marvel-movies"}) {
    marvelMoviesPageFields {
      headerMarvelMovies {
        title
        tagline
        pricture {
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
  allWpMarvelMovie {
    edges {
      node {
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
}
`

export default MarvelMovies