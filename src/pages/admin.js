import React, { useContext, useEffect, useState } from "react"
import "../styles/admin.css"

import { Button, CircularProgress, TextField } from "@material-ui/core"

import { navigate } from "gatsby"
import { FirebaseContext } from "../firebase/firebaseContext"

export default function Admin() {
  const { authenticated, adminLogin } = useContext(FirebaseContext)

  const [user, setUser] = useState({
    email: "",
    password: "",
    error: null,
  })

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    try {
      adminLogin(user.email, user.password)
      navigate("/app/content")
    } catch (error) {
      setUser({ ...user, error: error.message })
    }
  }

  useEffect(() => {
    if (authenticated) {
      navigate("/app/content")
    }
  }, [authenticated])

  return (
    <>
      {!true ? (
        <div className="admin-content">
          <CircularProgress />
        </div>
      ) : (
        <form className="admin-content" onSubmit={handleSubmit}>
          {user.error ? <p className="admin-error">{user.error}</p> : null}
          <TextField
            name="email"
            label="Usuario"
            type="text"
            variant="outlined"
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            value={user.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ padding: "14px 0" }}
          >
            Entrar
          </Button>
        </form>
      )}
    </>
  )
}
