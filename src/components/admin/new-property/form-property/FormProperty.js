import React, { useContext, useEffect, useState } from "react"
import "./FormProperty.css"
import { navigate } from "gatsby"

import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core"
import SelectLocality from "./select-locality/SelectLocality"
import UploadImages from "./upload-images/UploadImages"

import { FirebaseContext } from "../../../../firebase/firebaseContext"

export default function FormProperty() {
  const { firebase, isEdit, handleIsEdit } = useContext(FirebaseContext)

  console.log(isEdit)

  const [property, setProperty] = useState({
    title: isEdit ? isEdit.title : "",
    description: isEdit ? isEdit.description : "",
    imageUrl: isEdit ? isEdit.imageUrl : "",
    price: isEdit ? isEdit.price : 0,
    locality: isEdit ? isEdit.locality : "",
    rental: isEdit ? isEdit.rental : false,
    sale: isEdit ? isEdit.sale : false,
    barter: isEdit ? isEdit.barter : false,
    date: isEdit ? isEdit.date : Date.now(),
  })

  function handleChange(e) {
    setProperty({ ...property, [e.target.name]: e.target.value })
    console.log(property)
  }

  function handleChangeChecked(e) {
    setProperty({ ...property, [e.target.name]: e.target.checked })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      if (isEdit) {
        await firebase.firestore
          .collection("properties")
          .doc(isEdit.id)
          .update(property)
      } else {
        await firebase.firestore.collection("properties").add(property)
      }
      navigate("/app/content")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    return () => {
      handleIsEdit(null)
    }
  }, []) // eslint-disable-line

  return (
    <form className="new-property-form" onSubmit={handleSubmit}>
      <TextField
        name="title"
        label="Título"
        variant="outlined"
        size="small"
        value={property.title}
        onChange={handleChange}
      />
      <TextField
        name="description"
        label="Descripción"
        multiline
        rows={5}
        variant="outlined"
        size="small"
        value={property.description}
        onChange={handleChange}
      />
      <UploadImages
        name="images"
        property={property}
        setProperty={setProperty}
      />
      <TextField
        name="price"
        label="Precio"
        variant="outlined"
        type="number"
        size="small"
        value={property.price}
        onChange={handleChange}
      />
      <SelectLocality
        name="locality"
        onChange={handleChange}
        value={property.locality}
      />
      <div className="new-property-switch-grid">
        <FormControlLabel
          control={
            <Switch
              name="rental"
              checked={property.rental}
              color="primary"
              onChange={handleChangeChecked}
            />
          }
          label="Alquila"
        />
        <FormControlLabel
          control={
            <Switch
              name="sale"
              checked={property.sale}
              color="primary"
              onChange={handleChangeChecked}
            />
          }
          label="Vende"
        />
        <FormControlLabel
          control={
            <Switch
              name="barter"
              checked={property.barter}
              color="primary"
              onChange={handleChangeChecked}
            />
          }
          label="Permuta"
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        {isEdit ? "Editar" : "Añadir"}
      </Button>
    </form>
  )
}
