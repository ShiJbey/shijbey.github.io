import * as React from "react"
import Footer from "./Footer"
import Toolbar from "./Toolbar"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>{children}</main>
      <footer style={{ marginTop: "auto" }}>
        <Footer />
      </footer>
    </>
  )
}

export default Layout