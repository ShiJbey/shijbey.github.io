import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/Layout"
import ProjectGrid from "../components/ProjectGrid"
import Seo from "../components/Seo"

const HomePage: React.FC = () => (
  <Layout>
    <Seo
      title={"Shi Johnson-Bey"}
      description={`Project portfolio, blog, and CV`}
    />
    <Container className={`pt-5`}>
      <section id="about" className="mb-3">
        <h1 className="text-center my-3">Shi Johnson-Bey (he/him)</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="shadow"
                style={{ borderRadius: "10%", overflow: "hidden" }}
              >
                <StaticImage
                  src="../images/GDC19Headshot.jpg"
                  alt="photo at GDC19 AI Summit"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-md-8 p-3">
              <p>
                My name is Shi Johnson-Bey (pronounced like "shy"). I research
                multi-agent simulations for emergent storytelling as a Ph.D.
                student in the{" "}
                <a href="https://eis.ucsc.edu" target="_blank" rel="noreferrer">
                  Expressive Intelligence Studio
                </a>{" "}
                at the University of California - Santa Cruz. I have a M.S. in
                Biomedical Engineering from Carnegie Mellon University and two
                B.S. degrees in Computer Science and Neuroscience from the
                University of Delaware. I am the co-founder of,{" "}
                <a
                  href="https://theblacklistdmv.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Blacklist DMV
                </a>
                , a social media following focused on spotlighting Black-owned
                food businesses in Washington D.C, Maryland, and Virginia.
                Currently, I am currently the sole web developer and designer
                for our online food business directory,{" "}
                <a href="https://jyackl.com" target="_blank" rel="noreferrer">
                  Jyackl.com.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>

    <div className="pb-5">
      <section className="mb-3">
        <h1 className="text-center my-3">Projects</h1>
        <ProjectGrid />
      </section>
    </div>
  </Layout>
)

export default HomePage
