import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer: React.FC = () => (
  <footer className="p-3 text-center" style={{ fontSize: "16px" }}>
    <a
      className="mx-2"
      href="https://www.linkedin.com/in/shijbey"
      style={{ textDecoration: "none" }}
    >
      <FontAwesomeIcon icon={faLinkedin} size="3x" />
    </a>
    <a
      className="mx-2"
      href="https://github.com/ShiJbey"
      style={{ textDecoration: "none" }}
    >
      <FontAwesomeIcon icon={faGithub} size="3x" />
    </a>
  </footer>
)

export default Footer
