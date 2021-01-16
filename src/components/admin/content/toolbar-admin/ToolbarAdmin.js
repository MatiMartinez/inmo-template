import React from "react"
import "./ToolbarAdmin.css"
import { navigate } from "gatsby"

import { Button } from "@material-ui/core"

export default function ToolbarAdmin() {
  function handleNewProperty() {
    navigate("/app/new-property")
  }

  function handleNewLocality() {
    navigate("/app/new-locality")
  }

  return (
    <div className="toolbar-admin-content">
      <Button variant="contained" color="primary" onClick={handleNewProperty}>
        Añadir Propiedad
      </Button>
      <Button variant="contained" color="default" onClick={handleNewLocality}>
        Añadir Localidad
      </Button>
    </div>
  )
}
