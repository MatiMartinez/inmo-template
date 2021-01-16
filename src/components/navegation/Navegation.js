import { Link } from "gatsby"
import React, { useState } from "react"
import "./Navegation.css"

import Logo from "./logo/Logo"
import { CloseRounded, MenuRounded } from "@material-ui/icons"

export default function Navegation() {
  const [menu, setMenu] = useState(false)
  const [navbar, setNavbar] = useState(
    window.location.pathname === "/" ? false : true
  )

  function handleMenu() {
    setMenu(!menu)
  }

  function handleNavbar() {
    if (window.location.pathname === "/") {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  }

  window.addEventListener("scroll", handleNavbar)

  return (
    <header className={navbar ? "navbar active" : "navbar"}>
      <Logo />
      <button className="menu-icon" onClick={handleMenu}>
        {menu ? (
          <CloseRounded fontSize="large" />
        ) : (
          <MenuRounded fontSize="large" />
        )}
        <i className={menu ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
      <nav className={menu ? "nav-links active" : "nav-links"}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/found" className="nav-link">
          Propiedades
        </Link>
        <Link to="/about" className="nav-link">
          Nosotros
        </Link>
        <Link to="/services" className="nav-link">
          Servicios
        </Link>
        <Link to="/contact" className="nav-link">
          Contacto
        </Link>
      </nav>
    </header>
  )
}
