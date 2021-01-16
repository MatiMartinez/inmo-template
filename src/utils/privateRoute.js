import React, { useContext } from "react"
import { FirebaseContext } from "../firebase/firebaseContext"

export default function PrivateRoute({
  component: Component,
  location,
  ...rest
}) {
  const { authenticated } = useContext(FirebaseContext)

  if (authenticated === null && location.pathname !== "/admin") {
    return null
  }

  return <Component {...rest} />
}
