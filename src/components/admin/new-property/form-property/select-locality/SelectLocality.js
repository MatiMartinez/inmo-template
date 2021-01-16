import React, { useContext, useEffect, useState } from "react"

import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import Loading from "../../../../../utils/Loading"

import { FirebaseContext } from "../../../../../firebase/firebaseContext"

export default function SelectLocality({ onChange, value, name }) {
  const [localities, setLocalities] = useState(null)

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    async function handleGetLocalities() {
      await firebase.firestore
        .collection("localities")
        .orderBy("date", "desc")
        .onSnapshot(handleSnapshot)
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
    <FormControl variant="outlined" size="small">
      <InputLabel>Localidad</InputLabel>
      <Select name={name} value={value} onChange={onChange} label="Localidad">
        {localities.map(locality => (
          <MenuItem value={locality.value} key={locality.id}>
            {locality.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
