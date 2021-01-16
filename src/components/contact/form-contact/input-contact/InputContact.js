import React from "react"
import "./InputContact.css"

export default function InputContact({ name, label }) {
  return (
    <input
      className="input-contact"
      id="name"
      name={name}
      type="text"
      placeholder={label}
    />
  )
}
