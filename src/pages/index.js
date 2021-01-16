import React from "react"
import "../styles/index.css"

import Layout from "../components/layout/Layout"
import Search from "../components/index/search/Search"
import Hero from "../components/index/hero/Hero"
import Slogan from "../components/index/slogan/Slogan"
import Zones from "../components/index/zones/Zones"

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <section className="main-index">
          <Hero />
          <Search />
          <div className="overlay"></div>
        </section>
        <section className="main-secondary">
          <Slogan />
          <Zones />
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
