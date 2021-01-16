import React from "react"
import "./FormContact.css"

import InputContact from "./input-contact/InputContact"

export default function FormContact() {
  return (
    <div className="form-contact-content">
      <form className="form-contact-form">
        <InputContact label="Nombre" name="name" />
        <InputContact label="Email" name="email" />
        <textarea
          className="form-contact-textarea"
          placeholder="Mensaje"
          name="message"
          rows="4"
        />
        <button className="btn-send">Enviar</button>
      </form>
    </div>
  )
}
