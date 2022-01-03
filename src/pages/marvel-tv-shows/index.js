import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Banner from "../../components/banner"
import Teaser from "../../components/teaser"
import { teasers} from '../pages.module.css'

const marvelTvShows =({
    data:{
        wpPage:{marvelTvShowsPageFields:{headerMarvelTvShows}},
        allWpMarvelTvShows:{edges:tvShowsPage}
    }})=>{
    return(
    <Layout>
        {/* banner */}
        <Banner title={headerMarvelTvShows.title} 
        tagline={headerMarvelTvShows.tagline} 
        picture={headerMarvelTvShows.pricture}/>
        {/* al tv shows */}
        <div className={teasers}>{tvShowsPage.map((item)=>{
            const tvShow = item.node.marvelTvShowsFields;
               return <Teaser key={item.node.id} slug={`/marvel-tv-shows/${item.node.slug}`}
               poster={tvShow.poster} title={tvShow.title}/>
        })}</div>
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