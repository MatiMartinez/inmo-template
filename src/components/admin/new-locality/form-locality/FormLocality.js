import React, { useContext, useState } from "react"
import "./FormLocality.css"

import { Button, TextField } from "@material-ui/core"

import { FirebaseContext } from "../../../../firebase/firebaseContext"

export default function FormLocality() {
  const [locality, setLocality] = useState("")

  const { firebase } = useContext(FirebaseContext)

  function handleChange(e) {
    setLocality(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = {
        value: locality,
        date: Date.now(),
      }
      await firebase.firestore.collection("localities").add(data)
      setLocality("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="new-locality-form" onSubmit={handleSubmit}>
      <TextField
        name="locality"
        label="Localidad"
        variant="outlined"
        size="small"
        onChange={handleChange}
        value={locality}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={locality.length === 0 ? true : false}
      >
        Agregar
      </Button>
    </form>
  )
}
