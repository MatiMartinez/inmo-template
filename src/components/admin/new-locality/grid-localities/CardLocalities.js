import React, { useContext } from "react"

import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core"
import { DeleteRounded, LocationOnOutlined } from "@material-ui/icons"

import { FirebaseContext } from "../../../../firebase/firebaseContext"

export default function CardLocalities({ locality }) {
  const { firebase } = useContext(FirebaseContext)

  async function handleDeleteLocality() {
    try {
      await firebase.firestore
        .collection("localities")
        .doc(locality.id)
        .delete()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ListItem divider={true}>
      <ListItemAvatar>
        <Avatar>
          <LocationOnOutlined />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={locality.value} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleDeleteLocality}>
          <DeleteRounded />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
