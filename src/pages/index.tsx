import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import BlogGrid from "../components/BlogGrid"
import Layout from "../components/layout"
import ProjectGrid from "../components/ProjectGrid"
import PublicationTable from "../components/PublicationTable"

const HomePage: React.FC = () => (
  <Layout>
    <section id="about" className="mb-3">
      <h1 className="text-center my-3">About Me</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
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

    <hr />

    <section id="publications" className="mb-3">
      <h1 className="text-center my-3">Publications</h1>
      <PublicationTable />
    </section>

    <hr />

    <section id="cv" className="mb-3">
      <h1 className="text-center my-3">Resume/CV</h1>
      <div className="container bg-white mb-3 rounded p-3 border shadow">
        <h3 className="text-center mb-3">Education</h3>
        <p>
          Ph.D. Computaional Media, University of California - Santa Cruz, 2020
          - Present
        </p>
        <p>M.S. Biomedical Engineering, Carnegie Mellon University, 2019</p>
        <p>B.S. Computer Science, University of Delaware, 2017</p>
        <p>B.S. Neuroscience, University of Delaware, 2017</p>
      </div>

      <div className="container bg-white mb-3 rounded p-3 border shadow">
        <h3 className="text-center mb-3">Skills</h3>

        <h4>Most-used Programming Languages</h4>
        <p>Python, Typescript, C#, HTML/CSS, C/C++, Rust</p>
        <h4>Recently-used Technologies</h4>
        <p>Unity, Angular, React, NodeJs</p>
        <h4>Spoken Languages</h4>
        <p>English(Native), Japanese (Passed JLPT N5)</p>
      </div>

      <div className="container bg-white mb-3 rounded p-3 border shadow">
        <h3 className="text-center mb-3">Teaching Experience</h3>

        <h4>
          Undergraduate Teaching Assistant for "Introduction to Computer Science
          II"
        </h4>
        <p>University of Delaware CIS Department - Newark, DE</p>
        <p>Feb 2017 - May 2017</p>
        <p>Description:</p>
        <p>
          I assisted in facilitating students' learning of Java and
          object-oriented programming/design concepts. As part of my role, I
          graded students' work, held a weekly office hour, and ran a weekly lab
          section where students worked on assigned problem sets. Because I
          really enjoy teaching, I held additional office hours and started
          conducting 3-hour exam review sessions during midterms and finals.
          Also, my hard work earned me the privilege of occasionally
          substituting in for the professor to give course lectures.
        </p>
      </div>

      <div className="container bg-white mb-3 rounded p-3 border shadow">
        <h3 className="text-center mb-3">Research Experience</h3>

        <h4>Research Software Engineer (Adaptive Computing Lab)</h4>

        <p>
          U.S. Army Research Laboratory (CISD) - Aberdeen Proving Ground, MD
        </p>
        <p>August 2019 - June 2020</p>
        <p>Description:</p>
        <ul>
          <li>
            Investigated new technologies and novel approaches to deep learning,
            neural networks, and neuromorphic systems
          </li>
          <li>
            Investigated the conceptualization of computational and math-related
            problems associated with resource-constrained autonomous systems in
            both physical and simulated environments
          </li>
          <li>
            Developed, studied and improved the performance of various
            computation algorithms
          </li>
          <li>
            Assisted in the development of new software products and computation
            algorithms
          </li>
        </ul>

        <h4>ORAU Journeyman Fellow</h4>
        <p>
          U.S. Army Research Laboratory (HRED) - Aberdeen Proving Ground, MD
        </p>
        <p>June 2018 - May 2019</p>
        <p>Description:</p>
        <p>
          This research was coupled with my Master's research project in which I
          developed and implemented a virtual reality environment for testing
          event-related potentials (ERP) paradigms. The goal was to use the
          system to give users the ability to select and interact with objects
          in a virtual space. The environment was implemented using Unity and
          tested using an HTC Vive and a Brain Products EEG cap.
        </p>

        <h4>ORAU Summer Journeyman</h4>
        <p>
          U.S. Army Research Laboratory (HRED) - Aberdeen Proving Ground, MD
        </p>
        <p>June 2017 - Aug 2017</p>
        <p>Description:</p>
        <p>
          As my first experience working with electroencephalography (EEG)
          recording, I learned about various brain-computer interface (BCI)
          paradigms and their practical usage. My project for the summer was to
          take what I had learned to implement a "P300 speller" application,
          which would allow users to type text using their recorded brain
          activity. I implemented my system using a Raspberry Pi 3, OpenBCI EEG
          board, and Python.
        </p>

        <h4>Virtual Reality Developer / Research Intern</h4>
        <p>
          Johns Hopkins University Mind Brain Institude Computaional
          Neuroscience Lab - Baltimore, MD
        </p>
        <p>June 2015 - August 2015</p>
        <p>Description:</p>
        <p>
          I worked in with Dr. Ernst Niebur one of his Ph.D. students, on a
          project to explore the role head movements play in the visual
          exploration of images and scenes. As the developer on this project, I
          implemented and deployed our virtual reality environment on an Andriod
          smartphone using Unity and the Google Cardboard SDK. This research was
          conducted in Dr. Niebur's lab in the Mind/Brain Institute at the Johns
          Hopkins University. I learned about 3D math, VR design, data
          collection, and research experiment design
        </p>
      </div>

      <div className="container bg-white mb-3 rounded p-3 border shadow">
        <h3 className="text-center mb-3">Software Engineering Experience</h3>

        <h4>Software Engineering Intern</h4>
        <p>SevOne - Newark, DE</p>
        <p>June 2016 - August 2016</p>
        <p>Description:</p>
        <p>
          As an intern for the summer, I worked within a team of 5-6 software
          engineers on an agile-scrum team. My main responsibility was to
          address software defects critical to release. This included debugging
          C++ software/PHP extensions written in C++, conducting manual tests,
          and writing acceptance tests using PHP and FitNesse.
        </p>

        <h4>Microsoft Student Partner for the University of Delaware</h4>
        <p>Microsoft - Newark, DE</p>
        <p>August 2015 - June 2016</p>
        <p>Description:</p>
        <p>
          This was a fun student tech evangelist role in which I had the
          opportunity to share my passion for technology with other students by
          leading monthly skill workshops and connecting students with Microsoft
          developer resources. My workshops mainly revolved around game
          development and professional development.
        </p>
      </div>

      <div className="container bg-white mb-3 rounded p-3 border shadow">
        <h3 className="text-center mb-3">Awards, Honors, and Grants</h3>

        <ul>
          <li>
            2018 Carnegie Mellon University Graduate Small Research Grant (GuSH)
          </li>
          <li>
            2017 Steven Geracimos Memorial Award (University of Delaware,
            Computer Information Sciences Department)
          </li>
          <li>
            2015 Elbert C. Wiser RISE Corporate Friends Award (University of
            Delaware, College of Engineering)
          </li>
        </ul>
      </div>

      <div className="container bg-white mb-3 rounded p-3 border shadow">
        <h3 className="text-center mb-3">Leadership & Activities</h3>

        <h4>Student Advisory Council Alumni Chair</h4>
        <p>Resources to Insure Successful Engineers (RISE) Program</p>
        <p>September 2014 - May 2017</p>

        <h4>President</h4>
        <p>UD Computer Animation and Game Design (UDCAGD)</p>
        <p>May 2015 - May 2016</p>

        <h4>Team Captain</h4>
        <p>University of Delaware Mascot Team</p>
        <p>May 2014 - May 2016</p>
      </div>
    </section>
  </Layout>
)

export default HomePage
