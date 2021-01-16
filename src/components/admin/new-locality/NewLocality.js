import React from "react"
import "./NewLocality.css"

import LayoutAdmin from "../../layout/LayoutAdmin"
import FormLocality from "./form-locality/FormLocality"
import GridLocalities from "./grid-localities/GridLocalities"
import UndoButton from "../../../utils/UndoButton"
import { Divider, Typography } from "@material-ui/core"

export default function NewLocality() {
  return (
    <LayoutAdmin>
      <div className="new-locality-head">
        <UndoButton />
        <Divider orientation="vertical" flexItem />
        <Typography variant="h5">Añadir Localidad</Typography>
      </div>
      <div className="new-locality-body">
        <FormLocality />
        <GridLocalities />
      </div>
    </LayoutAdmin>
  )
}
