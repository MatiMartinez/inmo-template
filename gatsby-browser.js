/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import "./src/styles/global.css"

import FirebaseProvider from "./src/firebase/firebaseContext"

import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import firebaseConfig from "./src/firebase/config"

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig)
    }
    this.auth = app.auth()
    this.firestore = app.firestore()
    this.storage = app.storage()
  }
}

const firebase = new Firebase()
export default firebase

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>{element}</FirebaseProvider>
)
