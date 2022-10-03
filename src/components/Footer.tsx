import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer: React.FC = () => (
  <div className="p-3 text-center bg-dark">
    <a
      className="mx-2"
      href="https://www.linkedin.com/in/shijbey"
      style={{ textDecoration: "none" }}
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
    </a>
    <a
      className="mx-2"
      href="https://github.com/ShiJbey"
      style={{ textDecoration: "none" }}
    >
      <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
    </a>
    <a
      className="mx-2"
      href="https://scholar.google.com/citations?user=kL-TJAwAAAAJ&hl=en"
      style={{ textDecoration: "none" }}
    >
      <FontAwesomeIcon icon={faGraduationCap} size="2x" color="white" />
    </a>
  </div>
)

export default Footer
