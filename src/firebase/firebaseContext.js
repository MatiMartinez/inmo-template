import React, { createContext, useEffect, useState } from "react"
import firebase from "../../gatsby-browser"

export const FirebaseContext = createContext({})

const FirebaseProvider = props => {
  const [authenticated, setAuthenticated] = useState(null)
  const [isEdit, setIsEdit] = useState(null)
  const [properties, setProperties] = useState(null)
  const [localities, setLocalities] = useState(null)
  const [search, setSearch] = useState({
    operation: "",
    locality: "",
    type: "",
  })

  function handleChange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

  function cleanSearch() {
    setSearch({
      operation: "",
      locality: "",
      type: "",
    })
  }

  //TODO: Functions for Localities
  function getLocalities() {
    try {
      firebase.firestore
        .collection("localities")
        .orderBy("date", "desc")
        .onSnapshot(handleSnapshotLocalities)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSnapshotLocalities(snapshot) {
    const data = await snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
    setLocalities(data)
  }

  //TODO: Functions for Properties
  function handleIsEdit(property) {
    setIsEdit(property)
  }

  function getPropertiesByFilters() {
    try {
      firebase.firestore
        .collection("properties")
        .where("locality", "==", search.locality)
        .where(
          "rental",
          "==",
          search.operation.includes("alquila") ? true : false
        )
        .where("sale", "==", search.operation.includes("vende") ? true : false)
        .where(
          "barter",
          "==",
          search.operation.includes("permuta") ? true : false
        )
        .orderBy("date", "desc")
        .onSnapshot(handleSnapshotProperties)
    } catch (error) {
      console.log(error)
    }
  }

  function handleSnapshotProperties(snapshot) {
    const data = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
    setProperties(data)
  }

  //TODO: Functions for session
  async function adminLogin(email, password) {
    const data = await firebase.auth.signInWithEmailAndPassword(email, password)
    setAuthenticated(data)
  }

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        setAuthenticated(user)
      } else {
        setAuthenticated(null)
      }
    })
    return () => unsuscribe()
  }, [])

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        authenticated,
        setAuthenticated,
        adminLogin,
        handleIsEdit,
        isEdit,
        setIsEdit,
        search,
        handleChange,
        cleanSearch,
        properties,
        getPropertiesByFilters,
        localities,
        getLocalities,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
