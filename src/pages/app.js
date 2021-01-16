import React from "react"
import { Router } from "@reach/router"

import PrivateRoute from "../utils/privateRoute"
import Content from "../components/admin/content/Content"
import NewProperty from "../components/admin/new-property/NewProperty"
import NewLocality from "../components/admin/new-locality/NewLocality"

export default function App() {
  return (
    <>
      <Router>
        <PrivateRoute path="/app/content" component={Content} />
        <PrivateRoute path="/app/new-property" component={NewProperty} />
        <PrivateRoute path="/app/new-locality" component={NewLocality} />
      </Router>
    </>
  )
}
