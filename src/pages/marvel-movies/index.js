import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Banner from "../../components/banner"
import Teaser from "../../components/teaser"
import { teasers} from '../pages.module.css'


const MarvelMovies = ({
  data: {
    wpPage: {marvelMoviesPageFields:{headerMarvelMovies}},
    allWpMarvelMovie: {edges:moviesPage} 
    }}) =>{
    return (
        <Layout>
          {/* banner */}
          <Banner title={headerMarvelMovies.title} 
          tagline={headerMarvelMovies.tagline} 
          picture={headerMarvelMovies.pricture}/>
           {/* al movies */}
           <div className={teasers}>{moviesPage.map((item)=>{
            const movie = item.node.marvelMoviesFields;
               return <Teaser key={item.node.id} slug={`/marvel-movies/${item.node.slug}`}
               poster={movie.poster} title={movie.title}/>
           })}</div>
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