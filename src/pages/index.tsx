import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import BlogGrid from "../components/BlogGrid"
import Layout from "../components/layout"
import LeadershipActivities from "../components/LeadershipActivities"
import ProjectGrid from "../components/ProjectGrid"
import PublicationTable from "../components/PublicationTable"

const AWARDS: { year: string; name: string; organization: string }[] = [
  {
    year: "2018",
    name: "Graduate Small Research Grant (GuSH)",
    organization: "Carnegie Mellon University",
  },
  {
    year: "2017",
    name: "Steven Geracimos Memorial Award",
    organization:
      "University of Delaware, Computer Information Sciences Department",
  },
  {
    year: "2015",
    name: "Elbert C. Wiser RISE Corporate Friends Award",
    organization: "University of Delaware, College of Engineering",
  },
]

interface Education {
  start_year: string
  end_year: string
  degree: string
  institution: string
}

const EDUCATION: Education[] = [
  {
    start_year: "2020",
    end_year: "present",
    degree: "Doctor of Philosophy in Computational Media",
    institution: "UC Santa Cruz",
  },
  {
    start_year: "2017",
    end_year: "2019",
    degree: "Master of Science in Biomedical Engineering",
    institution: "Carnegie Mellon University",
  },
  {
    start_year: "2014",
    end_year: "2017",
    degree: "Bachelor of Science in Neuroscience",
    institution: "University of Delaware",
  },
  {
    start_year: "2013",
    end_year: "2017",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Delaware",
  },
]

const HomePage: React.FC = () => (
  <Layout>
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
        <hr></hr>

        {EDUCATION.map(entry => (
          <div className={`row`}>
            <div className={`col-auto`}>
              {entry.start_year} - {entry.end_year}
            </div>
            <div className={`col`}>
              <p>
                <strong>{entry.degree}</strong>
              </p>
              <p>{entry.institution}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container bg-white mb-3 rounded p-3 border shadow">
        <h3 className="text-center mb-3">Skills</h3>

        <h4>Most-used Programming Languages</h4>
        <p>Python, Typescript/JavaScript, C#, HTML/CSS, C/C++</p>

        <h4>Recently-used Technologies</h4>
        <p>Unity, Angular, React, NodeJs</p>

        <h4>Spoken Languages</h4>
        <p>English(Native), Japanese (Passed JLPT N5)</p>
      </div>

      <div className="container bg-white mb-3 rounded p-3 border shadow">
        <h3 className="text-center mb-3">Teaching Experience</h3>

        <h4>TA for CMPM 80K - Foundations of Video Game Design</h4>
        <p>UC Santa Cruz - Santa Cruz, CA</p>
        <p>Jan 2022 - Mar 2022</p>

        <h4>TA for CMPM 176 - Game Systems</h4>
        <p>UC Santa Cruz - Santa Cruz, CA</p>
        <p>Sep 2021 - Dec 2021</p>

        <h4>TA for CISC 181 - Introduction to Computer Science II</h4>
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
          Johns Hopkins University Mind Brain Institute Computational
          Neuroscience Lab - Baltimore, MD
        </p>
        <p>June 2015 - August 2015</p>
        <p>Description:</p>
        <p>
          I worked in with Dr. Ernst Niebur one of his Ph.D. students, on a
          project to explore the role head movements play in the visual
          exploration of images and scenes. As the developer on this project, I
          implemented and deployed our virtual reality environment on an Android
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
          {AWARDS.map(award => (
            <>
              <li>
                {award.year}, {award.name} ({award.organization})
              </li>
            </>
          ))}
        </ul>
      </div>

      <LeadershipActivities />
    </section>
  </Layout>
)

export default HomePage
