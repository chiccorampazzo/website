import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FaTwitter, FaLinkedin, FaEnvelope, FaMastodon } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact {
            email
            twitter
            linkedin
            googleScholar
            mastodon
          }
        }
      }
    }
  `)

  return (
    <>
      <a href={`https://twitter.com/` + data.site.siteMetadata.contact.twitter}>
        <FaTwitter size={40} className="m-5 text-black" />
      </a>
      <a
        href={
          `https://scholar.google.com/citations?user=` +
          data.site.siteMetadata.contact.googleScholar
        }
      >
        <i className="ai ai-google-scholar ai-3x m-5 text-black" />
      </a>
      <a
        href={
          `https://linkedin.com/in/` + data.site.siteMetadata.contact.linkedin
        }
      >
        <FaLinkedin size={40} className="m-5 text-black" />
      </a>
      <a href={data.site.siteMetadata.contact.mastodon}>
        <FaMastodon size={40} className="m-5 text-black" />
      </a>
      <a href={`mailto:` + data.site.siteMetadata.contact.email}>
        <FaEnvelope size={40} className="m-5 text-black" />
      </a>
    </>
  )
}

export default Footer
