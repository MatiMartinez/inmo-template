import React from "react"
import NavAdmin from "../admin/nav-admin/NavAdmin"

export default function LayoutAdmin(props) {
  return (
    <>
      <NavAdmin />
      {props.children}
    </>
  )
}
