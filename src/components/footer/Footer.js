import React from "react"
import "./Footer.css"

import { Facebook, Instagram } from "@material-ui/icons"

export default function Footer() {
  return (
    <footer>
      <div className="footer-socials">
        <Facebook fontSize="large" style={{ marginRight: "32px" }} />
        <Instagram fontSize="large" />
      </div>
      <p className="footer-info">Medina de Pomar, 27 - 28042 - Madrid</p>
      <p className="footer-info">&copy; Company 2020</p>
    </footer>
  )
}
