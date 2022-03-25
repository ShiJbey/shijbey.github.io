import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Toolbar: React.FC = () => (
  <Navbar collapseOnSelect bg="dark" variant="dark" className="px-2">
    <Navbar.Brand href="/">
      <StaticImage
        alt=""
        src="../images/anvil.png"
        width={30}
        height={30}
        className="mx-3"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" role="">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/cv">CV</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Toolbar
