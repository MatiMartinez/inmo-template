import React, { useContext, useEffect } from "react"
import "../styles/found.css"

import Layout from "../components/layout/Layout"
import Filters from "../components/found/filters/Filters"
import Grid from "../components/found/grid/Grid"

import { FirebaseContext } from "../firebase/firebaseContext"

export default function Found() {
  const { cleanSearch } = useContext(FirebaseContext)

  useEffect(() => {
    return () => cleanSearch()
  }, [])

  return (
    <Layout>
      <div className="found-content mt-navbar">
        <Filters />
        <Grid />
      </div>
    </Layout>
  )
}
