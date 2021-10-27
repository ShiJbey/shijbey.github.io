import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"

const HomePage: React.FC = () => (
  <Layout>
    <section id="about" className="mb-3">
      <h1 className="text-center my-3">About Me</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src="./assets/GDC19Headshot.jpg"
              alt=""
            />
            <StaticImage
              src="../images/GDC19Headshot.jpg"
              alt="photo at GDC19 AI Summit"
            />
          </div>
          <div className="col-md-8 p-3">
            <p>
              I research multi-agent simulations for interactive storytelling as
              a Ph.D. student in the{" "}
              <a href="https://eis.ucsc.edu" target="_blank" rel="noreferrer">
                Expressive Intelligence Studio
              </a>{" "}
              at the University of California - Santa Cruz. I have a M.S. in
              Biomedical Engineering from Carnegie Mellon University and two
              B.S. degrees in Computer Science and Neuroscience from the
              University of Delaware. In my spare time, run a Black-Owned food
              business directory called,{" "}
              <a
                href="https://theblacklistdmv.com"
                target="_blank"
                rel="noreferrer"
              >
                The Blacklist DMV
              </a>
              . I also do some freelance educational game development. Checkout
              my projects and feel free to reach out.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default HomePage
