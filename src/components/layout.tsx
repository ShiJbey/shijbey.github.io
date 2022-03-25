import * as React from "react"
import Footer from "./Footer"
import Toolbar from "./Toolbar"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Toolbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
