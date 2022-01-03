import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Banner from "../components/banner"
import {
  contactContainer,
  socials,
  instagram,
  facebook,
  twitter,
  youtube
} from './pages.module.css'

const contactPage = ({data:{wpPage:{contactPageFields:contact}}})=>{
    return(
    <Layout>
      {/* banner */}
      <Banner title={contact.headerContact.title} tagline={contact.headerContact.tagline}
      picture={contact.headerContact.pricture}/>
      {/* content */}
      <div className={contactContainer}>
        <h2>{contact.copanyInfoAndContact.blockTitle}</h2>
        <p>{contact.copanyInfoAndContact.text}</p>
      </div>
      <div className={contactContainer}>
        <h2>{contact.corporateHeadquarters.blockTitle}</h2>
        <p>{contact.corporateHeadquarters.title}</p>
        <p>{contact.corporateHeadquarters.address}</p>
        <p>{contact.corporateHeadquarters.postalCode} {contact.corporateHeadquarters.city}</p>
      </div>
      <div className={contactContainer}>
        <h2>{contact.mediaRelations.blockTitle}</h2>
        <p>{contact.mediaRelations.personName}</p>
        <p>Phone: <a href={`tel:${contact.mediaRelations.phoneNumber}`}>
                {contact.mediaRelations.phoneNumber}
        </a></p>
        <p>E-mail: <a href={`mailto:${contact.mediaRelations.email}`}>
          {contact.mediaRelations.email}
        </a></p>
      </div>
      <div className={socials}> 
        Follow us:
        <a
          target="__blank"
          className={instagram}
          href={contact.socials.instagram}
        ></a>
        <a
          target="__blank"
          className={facebook}
          href={contact.socials.facebook}
        ></a>
        <a
          target="__blank"
          className={twitter}
          href={contact.socials.twitter}
        ></a>
        <a
          target="__blank"
          className={youtube}
          href={contact.socials.youtube}
        ></a>
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
        copanyInfoAndContact {
        blockTitle
        text
      }
      corporateHeadquarters {
        blockTitle
        title
        address
        postalCode
        city
      }
      mediaRelations {
        blockTitle
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