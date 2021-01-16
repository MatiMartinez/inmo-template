import React from "react"
import Helmet from "react-helmet"

import Navegation from "../navegation/Navegation"
import Footer from "../footer/Footer"

export default function Layout(props) {
  return (
    <>
      <Helmet>
        <title>Inmobiliaria</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
      </Helmet>
      <Navegation />
      {props.children}
      <Footer />
    </>
  )
}
