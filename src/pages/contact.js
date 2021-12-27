import * as React from 'react'
import { graphql,Link } from "gatsby"
import Layout from '../components/layout'
import Header from "../components/header"

const contactPage = ({data:{wpPage:{contactPageFields:contact}}})=>{
    return(
    <Layout>
      <Header title={contact.headerContact.title} tagline={contact.headerContact.tagline}
      picture={contact.headerContact.pricture}/>

      <div>
        <h2>Corporate Headquarters</h2>
        <p>{contact.corporateHeadquarters.title}</p>
        <p>{contact.corporateHeadquarters.address}</p>
        <p>{contact.corporateHeadquarters.postalCode} {contact.corporateHeadquarters.city}</p>
      </div>
      <div>
        <h2>Media Relations</h2>
        <p>{contact.mediaRelations.personName}</p>
        <p>Phone: <a href={`tel:${contact.mediaRelations.phoneNumber}`}>
                {contact.mediaRelations.phoneNumber}
        </a></p>
        <p>E-mail: <a href={`mailto:${contact.mediaRelations.email}`}>
          {contact.mediaRelations.email}
        </a></p>
      </div>
      <div> 
                Follow us:
                <a
                  target="__blank"
                  //className={instagram}
                  href={contact.socials.instagram}
                />
                <a
                  target="__blank"
                  //className={facebook}
                  href={contact.socials.facebook}
                />
                <a
                  target="__blank"
                  //className={twitter}
                  href={contact.socials.twitter}
                />
                <a
                target="__blank"
                //className={twitter}
                href={contact.socials.youtube}
                />
              </div>
    </Layout>)
}

export const query = graphql`
query {
    wpPage(slug: {eq: "contact-us"}) {
      contactPageFields {
        headerContact {
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
        corporateHeadquarters {
          title
          address
          postalCode
          city
        }
        mediaRelations {
          personName
          phoneNumber
          email
        }
        socials {
          facebook
          instagram
          twitter
          youtube
        }
      }
    }
  }
`

export default contactPage;