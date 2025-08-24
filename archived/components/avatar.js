import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Francesco-Rampazzo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div
      className="bg-gradient-to-r  from-yellow-600 to-yellow-300 mb-12 p-1 flex"
      style={{
        borderRadius: "100%",
        margin: `auto`,
      }}
    >
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{
          width: `100%`,
          borderRadius: "100%",
        }}
      />
    </div>
  )
}

export default Avatar
