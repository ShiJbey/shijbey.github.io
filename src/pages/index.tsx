import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import BlogGrid from "../components/BlogGrid"
import Layout from "../components/layout"
import ProjectGrid from "../components/ProjectGrid"
import Seo from "../components/seo"

const HomePage: React.FC = () => (
  <Layout>
    <Seo
      title={"Shi Johnson-Bey"}
      description={`Project portfolio, blog, and CV`}
    />
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
              />
            </div>
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
              University of Delaware. I am the co-founder of,{" "}
              <a
                href="https://theblacklistdmv.com"
                target="_blank"
                rel="noreferrer"
              >
                The Blacklist DMV
              </a>
              , where we focus on spotlighting Black-owned food businesses in
              Washington D.C, Maryland, and Virginia. I am currently the sole
              web developer and designer for our online business directory,{" "}
              <a href="https://jyackl.com" target="_blank" rel="noreferrer">
                Jyackl.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <hr />

    <section id="projects" className="mb-3">
      <h1 className="text-center my-3">Projects</h1>
      <ProjectGrid />
    </section>

    <hr />

    <section id="projects" className="mb-3">
      <h1 className="text-center my-3">Blogs</h1>
      <BlogGrid />
    </section>
  </Layout>
)

export default HomePage
