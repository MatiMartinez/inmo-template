import React from "react"
import "./InfoContact.css"

import { LocationOnTwoTone, ScheduleTwoTone } from "@material-ui/icons"

export default function InfoContact() {
  return (
    <div className="info-contact-content">
      <h1>NUESTA AGENCIA</h1>
      <div className="grid-info-contact">
        <LocationOnTwoTone
          fontSize="large"
          style={{ marginRight: "16px", marginTop: "4px" }}
        />
        <div className="grid-text">
          <p>BARNES BARCELONA</p>
          <p>Carrer del Mestre Nicolau 2</p>
          <p>08021 Barcelona</p>
          <p>+34 938 298 005</p>
          <p>barcelona@barnes-international.com</p>
        </div>
      </div>
      <h1>HORARIO DE APERTURA</h1>
      <div className="grid-info-contact">
        <ScheduleTwoTone
          fontSize="large"
          style={{ marginRight: "16px", marginTop: "4px" }}
        />
        <div className="grid-text">
          <p>De lunes a viernes: 10h - 19h</p>
          <p>Sábados y domingos: con cita previa</p>
        </div>
      </div>
    </div>
  )
}
