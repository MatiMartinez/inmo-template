import React, { useContext, useEffect, useState } from "react"

import { List } from "@material-ui/core"
import Loading from "../../../../utils/Loading"
import CardLocalities from "./CardLocalities"

import { FirebaseContext } from "../../../../firebase/firebaseContext"

export default function GridLocalities() {
  const [localities, setLocalities] = useState(null)

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    async function handleGetLocalities() {
      try {
        await firebase.firestore
          .collection("localities")
          .orderBy("date", "desc")
          .onSnapshot(handleSnapshot)
      } catch (error) {
        console.log(error)
      }
    }
    handleGetLocalities()
  }, []) // eslint-disable-line

  async function handleSnapshot(snapshot) {
    const data = await snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
    setLocalities(data)
  }

  if (localities === null) return <Loading />

  return (
    <List dense={false}>
      {localities.map((locality, index) => (
        <CardLocalities locality={locality} key={index} />
      ))}
    </List>
  )
}
