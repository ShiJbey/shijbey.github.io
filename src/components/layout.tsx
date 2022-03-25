import * as React from "react"
import Footer from "./Footer"
import { Container } from "react-bootstrap"
import Toolbar from "./Toolbar"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Toolbar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
