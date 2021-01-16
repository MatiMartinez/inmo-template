import React, { useContext, useState } from "react"
import "./UploadImages.css"

import { Button } from "@material-ui/core"
import { PermMedia } from "@material-ui/icons"

import { FirebaseContext } from "../../../../../firebase/firebaseContext"

export default function UploadImages({ property, setProperty }) {
  const { firebase } = useContext(FirebaseContext)

  const [file, setFile] = useState(null)
  const [imagePath, setImagePath] = useState(null)

  function handleChange(e) {
    setFile(e.target.files[0])
    setImagePath(Date.now() + "")
  }

  function handleUpload() {
    const uploadTask = firebase.storage.ref(`/images/${imagePath}`).put(file)
    uploadTask.on("state_changed", console.log, console.error, () => {
      firebase.storage
        .ref("images")
        .child(imagePath)
        .getDownloadURL()
        .then(url => {
          setProperty({ ...property, imageUrl: url })
        })
        .then(() => {
          setFile(null)
        })
    })
  }

  function handleDelete() {
    if (imagePath) {
      const imageRef = firebase.storage.ref("images").child(imagePath)
      imageRef
        .delete()
        .then(() => {
          setProperty({ ...property, imageUrl: null })
          setImagePath(null)
          console.log("Borrado")
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <div className="upload-images-content">
      <div className="upload-images-buttons">
        <input
          type="file"
          accept="image/*"
          id="button-file"
          className="input-upload"
          onChange={handleChange}
        />
        <label htmlFor="button-file">
          <Button
            variant="contained"
            color="default"
            size="small"
            startIcon={<PermMedia />}
            style={{ width: "max-content", textTransform: "capitalize" }}
            component="span"
            disabled={property.imageUrl ? true : false}
          >
            Subir Imagen
          </Button>
        </label>
        <Button
          disabled={!file}
          variant="contained"
          size="small"
          onClick={handleUpload}
        >
          Subir
        </Button>
      </div>
      {property.imageUrl && (
        <div className="upload-images-preview">
          <img
            src={property.imageUrl}
            alt="property"
            className="upload-images-image"
          />
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={handleDelete}
          >
            Borrar
          </Button>
        </div>
      )}
    </div>
  )
}
