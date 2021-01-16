import React, { useContext } from "react"
import { navigate } from "gatsby"

import { AppBar, Button, Toolbar, Typography } from "@material-ui/core"

import { FirebaseContext } from "../../../firebase/firebaseContext"

export default function NavAdmin() {
  const { firebase } = useContext(FirebaseContext)

  async function handleLogout() {
    try {
      await firebase.auth.signOut()
      navigate("/admin")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AppBar position="static" style={{ padding: "8px 8px" }}>
      <Toolbar>
        <Typography variant="h6">News</Typography>
        <Button
          color="inherit"
          onClick={handleLogout}
          style={{ marginLeft: "auto" }}
        >
          Salir
        </Button>
      </Toolbar>
    </AppBar>
  )
}
