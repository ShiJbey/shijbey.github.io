import * as React from "react"
import Footer from "./Footer"
import { Container } from "react-bootstrap"
import Toolbar from "./Toolbar"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Toolbar />
      <Container className="layout-wrapper">
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  )
}

export default Layout
