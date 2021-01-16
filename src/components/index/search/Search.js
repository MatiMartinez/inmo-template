import React, { useContext, useEffect, useState } from "react"
import "./Search.css"

import SelectFilter from "./select/SelectFilter"
import { propertyTypeOptions, typeOptions } from "../../../utils/selectOptions"
import { SearchRounded } from "@material-ui/icons"

import { FirebaseContext } from "../../../firebase/firebaseContext"
import { IconButton } from "@material-ui/core"
import { navigate } from "gatsby"

export default function Search() {
  const { handleChange, search, localities, getLocalities } = useContext(
    FirebaseContext
  )

  useEffect(() => {
    function handleGetLocalities() {
      getLocalities()
    }
    handleGetLocalities()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    navigate("/found")
  }

  return (
    <form className="search-content" onSubmit={handleSubmit}>
      <div className="search-selects">
        <SelectFilter
          name="operation"
          label="Operación"
          options={typeOptions}
          value={search.operation}
          onChange={handleChange}
        />
        <SelectFilter
          name="locality"
          label="Localidad"
          options={localities}
          value={search.locality}
          onChange={handleChange}
        />
        <SelectFilter
          name="type"
          label="Tipo de inmueble"
          options={propertyTypeOptions}
          value={search.type}
          onChange={handleChange}
        />
      </div>
      <IconButton
        type="submit"
        style={{
          background: "#333333",
          borderRadius: "4px",
          marginLeft: "16px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <SearchRounded fontSize="large" style={{ color: "#ffffff" }} />
      </IconButton>
    </form>
  )
}
