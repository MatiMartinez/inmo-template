import React, { useContext, useEffect } from "react"
import "./Filters.css"

import SelectFilter from "../../index/search/select/SelectFilter"
import { propertyTypeOptions, typeOptions } from "../../../utils/selectOptions"
import { IconButton } from "@material-ui/core"
import { SearchRounded } from "@material-ui/icons"

import { FirebaseContext } from "../../../firebase/firebaseContext"

export default function Filters() {
  const {
    handleChange,
    search,
    localities,
    getLocalities,
    getPropertiesByFilters,
  } = useContext(FirebaseContext)

  useEffect(() => {
    function handleGetLocalities() {
      getLocalities()
    }
    handleGetLocalities()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    await getPropertiesByFilters()
  }

  return (
    <div>
      <form className="filters-content" onSubmit={handleSubmit}>
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
        <IconButton
          type="submit"
          style={{
            background: "#333333",
            borderRadius: "4px",
            height: "100%",
          }}
        >
          <SearchRounded fontSize="large" style={{ color: "#ffffff" }} />
        </IconButton>
      </form>
    </div>
  )
}
