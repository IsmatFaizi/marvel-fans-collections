import { graphql,Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Header from "../../components/header"
import Teaser from "../../components/teaser"

const marvelTvShows =({
    data:{
        wpPage:{marvelTvShowsPageFields:{headerMarvelTvShows}},
        allWpMarvelTvShows:{edges:tvShowsPage}
    }})=>{
    return(
    <Layout>
        <Header title={headerMarvelTvShows.title} 
        tagline={headerMarvelTvShows.tagline} 
        picture={headerMarvelTvShows.pricture}/>
        {tvShowsPage.map((item)=>{
            const tvShow = item.node.marvelTvShowsFields;
               return <Teaser key={item.node.id} slug={`/marvel-tv-shows/${item.node.slug}`}
               poster={tvShow.poster} title={tvShow.title}/>
        })}
    </Layout>)
}

export const query = graphql`
query{
    wpPage(slug: {eq: "marvel-tv-shows"}) {
      marvelTvShowsPageFields {
        headerMarvelTvShows {
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
    allWpMarvelTvShows {
      edges {
        node {
          slug
          id
          marvelTvShowsFields {
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
}`


export default marvelTvShows