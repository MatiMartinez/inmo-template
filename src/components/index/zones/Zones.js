import React from "react"
import CardZones from "./card-zones/CardZones"
import "./Zones.css"

export default function Zones() {
  return (
    <div className="zones-content">
      <h1 className="zones-title">Zonas</h1>
      <p className="zones-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid-zones">
        <CardZones />
        <CardZones />
        <CardZones />
        <CardZones />
        <CardZones />
      </div>
    </div>
  )
}
