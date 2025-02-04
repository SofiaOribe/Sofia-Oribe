import React from "react"
import { withMainData } from "./hoc/with-main-data"
import { Route, Routes } from "react-router-dom"
import Home from "./features/home"
import Layout from "./Layout"

const TempApp = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

const App = withMainData(TempApp)
export default App

