import { Link } from "gatsby"
import React from "react"

export default function Logo() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          color: "#ffffff",
        }}
      >
        LOREM
      </h2>
    </Link>
  )
}
