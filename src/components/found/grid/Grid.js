import React, { useContext, useEffect } from "react"
import "./Grid.css"

import Card from "./card/Card" // eslint-disable-line

import { FirebaseContext } from "../../../firebase/firebaseContext"
import Loading from "../../../utils/Loading"

export default function Grid() {
  const { getPropertiesByFilters, properties } = useContext(FirebaseContext)

  useEffect(() => {
    function handleGetPropertiesByFilters() {
      getPropertiesByFilters()
    }
    handleGetPropertiesByFilters()
  }, [])

  if (properties === null) return <Loading />

  return (
    <div className="grid-content">
      <h1 className="grid-content-title">(10 resultados)</h1>
      <div className="grid">
        {properties.map(property => (
          <Card property={property} key={property.id} />
        ))}
      </div>
    </div>
  )
}
