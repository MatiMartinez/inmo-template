import React, { useContext } from "react"
import { navigate } from "gatsby"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { es } from "date-fns/locale"

import { IconButton, TableCell, TableRow } from "@material-ui/core"
import { DeleteRounded, EditRounded } from "@material-ui/icons"

import { FirebaseContext } from "../../../../firebase/firebaseContext"

export default function PropertyCard({ property }) {
  const { firebase, handleIsEdit } = useContext(FirebaseContext)

  function handleEditProperty() {
    handleIsEdit(property)
    navigate("/app/new-property")
  }

  async function handleDeleteProperty() {
    try {
      await firebase.firestore
        .collection("properties")
        .doc(property.id)
        .delete()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TableRow hover={true}>
      <TableCell>
        <img
          src={property.imageUrl}
          alt="property"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </TableCell>
      <TableCell align="right">{property.title}</TableCell>
      <TableCell align="right">{property.locality}</TableCell>
      <TableCell align="right">
        {formatDistanceToNow(new Date(property.date), { locale: es })}
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={handleEditProperty}>
          <EditRounded />
        </IconButton>
        <IconButton onClick={handleDeleteProperty}>
          <DeleteRounded />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
