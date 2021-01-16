import React from "react"
import "../styles/contact.css"

import Layout from "../components/layout/Layout"
import FormContact from "../components/contact/form-contact/FormContact"
import InfoContact from "../components/contact/info-contact/InfoContact"

export default function contact() {
  return (
    <Layout>
      <div className="contact-content mt-navbar">
        <h1 className="contact-title">Lorem ipsum dolor</h1>
        <p className="contact-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod{" "}
          <br /> tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="contact-info">
          <InfoContact />
          <FormContact />
        </div>
      </div>
    </Layout>
  )
}
