import React, { useContext } from "react"
import "./NewProperty.css"

import { Divider, Typography } from "@material-ui/core"
import LayoutAdmin from "../../layout/LayoutAdmin"
import UndoButton from "../../../utils/UndoButton"
import FormProperty from "./form-property/FormProperty"

import { FirebaseContext } from "../../../firebase/firebaseContext"

export default function NewProperty() {
  const { isEdit } = useContext(FirebaseContext)

  return (
    <LayoutAdmin>
      <div className="new-property-head">
        <UndoButton />
        <Divider orientation="vertical" flexItem />
        <Typography variant="h5">
          {isEdit ? "Editar" : "Añadir"} Propiedad
        </Typography>
      </div>
      <div className="new-property-body">
        <FormProperty />
      </div>
    </LayoutAdmin>
  )
}
