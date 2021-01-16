import React from "react"

import { IconButton } from "@material-ui/core"
import { UndoRounded } from "@material-ui/icons"
import { navigate } from "gatsby"

export default function UndoButton() {
  function handleUndo() {
    navigate("/app/content")
  }

  return (
    <IconButton onClick={handleUndo}>
      <UndoRounded fontSize="default" />
    </IconButton>
  )
}
