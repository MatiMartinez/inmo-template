import React from "react"
import "./CardZones.css"

import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

export default function CardZones() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      tag="div"
      fluid={image.sharp.fluid}
      className="card-zones-content"
    >
      <h1 className="card-zones-title">Madrid</h1>
    </BackgroundImage>
  )
}
