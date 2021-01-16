import React, { useContext, useEffect, useState } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import Loading from "../../../../utils/Loading"
import PropertyCard from "./PropertyCard"

import { FirebaseContext } from "../../../../firebase/firebaseContext"

export default function GridProperties() {
  const [properties, setProperties] = useState(null)

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    async function handleGetProperties() {
      try {
        await firebase.firestore
          .collection("properties")
          .orderBy("date", "desc")
          .onSnapshot(handleSnapshot)
      } catch (error) {
        console.log(error)
      }
    }
    handleGetProperties()
  }, []) // eslint-disable-line

  function handleSnapshot(snapshot) {
    const data = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
    setProperties(data)
  }

  if (properties === null) return <Loading />

  return (
    <TableContainer
      style={{
        background: "#ffffff",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0 ,0 , 0, 0.23)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Previsualización</TableCell>
            <TableCell align="right">Título</TableCell>
            <TableCell align="right">Localidad</TableCell>
            <TableCell align="right">Última edición</TableCell>
            <TableCell align="right">Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property, index) => (
            <PropertyCard property={property} key={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
