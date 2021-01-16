import React from "react"
import "../styles/about.css"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout/Layout"
import AboutUs from "../components/about/about-us/AboutUs"

export default function About() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero-1.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <BackgroundImage
        tag="section"
        fluid={image.sharp.fluid}
        style={{
          height: "500px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
          padding: "64px 30%",
        }}
        fadeIn="soft"
      >
        <h1 className="about-title">Conoce a REMAX</h1>
        <p className="about-subtitle">
          Te damos la bienvenida a la comunidad de viajeros de Airbnb. Donde sea
          que vayas, tenemos un lugar para vos.
        </p>
      </BackgroundImage>
      <AboutUs />
    </Layout>
  )
}
