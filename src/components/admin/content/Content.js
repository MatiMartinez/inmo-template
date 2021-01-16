import React from "react"
import "./Content.css"

import LayoutAdmin from "../../layout/LayoutAdmin"
import GridProperties from "./grid-properties/GridProperties"
import ToolbarAdmin from "./toolbar-admin/ToolbarAdmin"

export default function Content() {
  return (
    <LayoutAdmin>
      <ToolbarAdmin />
      <div className="content-body">
        <GridProperties />
      </div>
    </LayoutAdmin>
  )
}
