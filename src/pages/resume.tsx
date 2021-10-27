import React from "react"
import Layout from "../components/layout"
import PublicationTable from "../components/PublicationTable"

const publications = [
  {
    year: "2020",
    title:
      "A novel approach towards computing global maps for multi-robotic operations in tactical environments",
    url: "/publications/DLC_SPIE_2020.pdf",
  },
  {
    year: "2018",
    title:
      "Head movements are correlated with other measures of visual attention at smaller spatial scales",
    url: "/publications/08362264.pdf",
  },
  {
    year: "2017",
    title:
      "Head movements during visual exploration of natural images in virtual reality",
    url: "/publications/HeadMovementsDuringVisualExploration.pdf",
  },
]

const resume = () => {
  return (
    <Layout>
      <h1>Resume/CV</h1>
      <h2>Publications</h2>
      <PublicationTable publications={publications} />

      <section id="cv" className="mb-3">
        <h1 className="text-center mb-3">Resume/CV</h1>

        <div className="container bg-white mb-3 rounded p-3 border shadow">
          <h3>Education</h3>
          <hr />
          <p>
            Ph.D. Computaional Media, University of California - Santa Cruz,
            2020 - Present
          </p>
          <p>M.S. Biomedical Engineering, Carnegie Mellon University, 2019</p>
          <p>B.S. Computer Science, University of Delaware, 2017</p>
          <p>B.S. Neuroscience, University of Delaware, 2017</p>
        </div>

        <div className="container bg-white mb-3 rounded p-3 border shadow">
          <h3>Skills</h3>
          <hr />
          <h4>Most-used Programming Languages</h4>
          <p>Python, Typescript, C#, HTML/CSS, C/C++, Rust</p>
          <h4>Recently-used Technologies</h4>
          <p>Unity, Angular, React, NodeJs</p>
          <h4>Spoken Languages</h4>
          <p>English(Native), Japanese (Passed JLPT N5)</p>
        </div>

        <div className="container bg-white mb-3 rounded p-3 border shadow">
          <h3>Teaching Experience</h3>
          <hr />
          <h4>
            Undergraduate Teaching Assistant for Introduction to Computer
            Science II
          </h4>
          <p>University of Delaware CIS Department - Newark, DE</p>
          <p>Feb 2017 - May 2017</p>
          <p>Description:</p>
          <p>
            I assisted in facilitating students&apos; learning of Java and
            object-oriented programming/design concepts. As part of my role, I
            graded students&apos; work, held a weekly office hour, and ran a
            weekly lab section where students worked on assigned problem sets.
            Because I really enjoy teaching, I held additional office hours and
            started conducting 3-hour exam review sessions during midterms and
            finals. Also, my hard work earned me the privilege of occasionally
            substituting in for the professor to give course lectures.
          </p>
        </div>

        <div className="container bg-white mb-3 rounded p-3 border shadow">
          <h3>Research Experience</h3>
          <hr />
          <h4>Research Software Engineer (Adaptive Computing Lab)</h4>

          <p>
            U.S. Army Research Laboratory (CISD) - Aberdeen Proving Ground, MD
          </p>
          <p>August 2019 - June 2020</p>
          <p>Description:</p>
          <p>
            <ul>
              <li>
                Investigated new technologies and novel approaches to deep
                learning, neural networks, and neuromorphic systems
              </li>
              <li>
                Investigated the conceptualization of computational and
                math-related problems associated with resource-constrained
                autonomous systems in both physical and simulated environments
              </li>
              <li>
                Developed, studied and improved the performance of various
                computation algorithms
              </li>
              <li>
                Assisted in the development of new software products and
                computation algorithms
              </li>
            </ul>
          </p>

          <hr />

          <h4>ORAU Journeyman Fellow</h4>
          <p>
            U.S. Army Research Laboratory (HRED) - Aberdeen Proving Ground, MD
          </p>
          <p>June 2018 - May 2019</p>
          <p>Description:</p>
          <p>
            This research was coupled with my Master&apos;s research project in
            which I developed and implemented a virtual reality environment for
            testing event-related potentials (ERP) paradigms. The goal was to
            use the system to give users the ability to select and interact with
            objects in a virtual space. The environment was implemented using
            Unity and tested using an HTC Vive and a Brain Products EEG cap.
          </p>

          <hr />

          <h4>ORAU Summer Journeyman</h4>
          <p>
            U.S. Army Research Laboratory (HRED) - Aberdeen Proving Ground, MD
          </p>
          <p>June 2017 - Aug 2017</p>
          <p>Description:</p>
          <p>
            As my first experience working with electroencephalography (EEG)
            recording, I learned about various brain-computer interface (BCI)
            paradigms and their practical usage. My project for the summer was
            to take what I had learned to implement a &quot;P300 speller&quot;
            application, which would allow users to type text using their
            recorded brain activity. I implemented my system using a Raspberry
            Pi 3, OpenBCI EEG board, and Python.
          </p>

          <hr />

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
            exploration of images and scenes. As the developer on this project,
            I implemented and deployed our virtual reality environment on an
            Andriod smartphone using Unity and the Google Cardboard SDK. This
            research was conducted in Dr. Niebur&apos;s lab in the Mind/Brain
            Institute at the Johns Hopkins University. I learned about 3D math,
            VR design, data collection, and research experiment design
          </p>
        </div>

        <div className="container bg-white mb-3 rounded p-3 border shadow">
          <h3>Software Engineering Experience</h3>
          <hr />
          <h4>Software Engineering Intern</h4>
          <p>SevOne - Newark, DE</p>
          <p>June 2016 - August 2016</p>
          <p>Description:</p>
          <p>
            As an intern for the summer, I worked within a team of 5-6 software
            engineers on an agile-scrum team. My main responsibility was to
            address software defects critical to release. This included
            debugging C++ software/PHP extensions written in C++, conducting
            manual tests, and writing acceptance tests using PHP and FitNesse.
          </p>

          <hr />

          <h4>Microsoft Student Partner for the University of Delaware</h4>
          <p>Microsoft - Newark, DE</p>
          <p>August 2015 - June 2016</p>
          <p>Description:</p>
          <p>
            This was a fun student tech evangelist role in which I had the
            opportunity to share my passion for technology with other students
            by leading monthly skill workshops and connecting students with
            Microsoft developer resources. My workshops mainly revolved around
            game development and professional development.
          </p>
        </div>

        <div className="container bg-white mb-3 rounded p-3 border shadow">
          <h3>Awards, Honors, and Grants</h3>
          <hr />
          <ul>
            <li>
              2018 Carnegie Mellon University Graduate Small Research Grant
              (GuSH)
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
          <h3>Leadership & Activities</h3>
          <hr />
          <h4>Student Advisory Council Alumni Chair</h4>
          <p>Resources to Insure Successful Engineers (RISE) Program</p>
          <p>September 2014 - May 2017</p>

          <hr />

          <h4>President</h4>
          <p>UD Computer Animation and Game Design (UDCAGD)</p>
          <p>May 2015 - May 2016</p>

          <hr />

          <h4>Team Captain</h4>
          <p>University of Delaware Mascot Team</p>
          <p>May 2014 - May 2016</p>
        </div>
      </section>
    </Layout>
  )
}

export default resume
