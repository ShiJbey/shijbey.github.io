import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import PublicationTable from "../components/PublicationTable"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../font-awesome"
import { Container } from "react-bootstrap"

const CvPage: React.FC = () => (
  <Layout>
    <Container>
      <h1>
        Shi Johnson-Bey CV{" "}
        <a href="./publications/Shi_Johnson-Bey_CV.pdf">
          <FontAwesomeIcon icon={"file-pdf"} color={"red"} />
        </a>
      </h1>
      <section className={`cv-section`}>
        <h3 className={`cv-section-title`}>Education</h3>
        <table>
          <tbody>
            <tr>
              <td>2020 - Present</td>
              <td>
                <div>
                  Doctor of Philosophy, Computational Media<br></br>
                  University of California - Santa Cruz<br></br>
                  Advisors: Michael Mateas, Noah Wardip-Fruin
                </div>
              </td>
              <td>
                <StaticImage
                  alt=""
                  src="../images/ucsc.png"
                  style={{
                    maxHeight: "100%",
                    aspectRatio: "1",
                    maxWidth: "72px",
                    objectFit: "cover",
                  }}
                  className="mx-3"
                />
              </td>
            </tr>
            <tr>
              <td>2017- 2019</td>
              <td>
                <div>
                  Master of Science, Biomedical Engineering<br></br>
                  Carnegie Mellon University<br></br>
                  Advisor: Pulkit Grover<br></br>
                </div>
              </td>
              <td>
                <StaticImage
                  alt=""
                  src="../images/cmu-600x600.png"
                  style={{
                    maxHeight: "100%",
                    aspectRatio: "1",
                    maxWidth: "72px",
                    objectFit: "cover",
                  }}
                  className="mx-3"
                />
              </td>
            </tr>
            <tr>
              <td>2013- 2017</td>
              <td>
                <div>
                  Bachelor of Science, Computer Science<br></br>
                  Bachelor of Science, Neuroscience<br></br>
                  University of Delaware<br></br>
                </div>
              </td>
              <td>
                <StaticImage
                  alt=""
                  src="../images/youdee.png"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "72px",
                  }}
                  className="mx-3"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={`cv-section`}>
        <h3 className={`cv-section-title`}>Publications</h3>
        <PublicationTable />
      </section>

      <section className={`cv-section`}>
        <h3 className={`cv-section-title`}>Talks</h3>
        <table>
          <tbody>
            <tr>
              <td>2021</td>
              <td>
                <div>
                  AIIDE 21, PLIE Workshop,{" "}
                  <a href="https://www.youtube.com/watch?v=B1OzIJAeN54">
                    "Centrifuge: A Visual Tool for Authoring Sifting Patterns
                    for Character-Based Simulationist Story Worlds"
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={`cv-section`}>
        <h3 className={`cv-section-title`}>Press</h3>
        <table>
          <tbody>
            <tr>
              <td>06/2019</td>
              <td>
                <div>
                  <a href="https://engineering.cmu.edu/news-events/news/2019/06/10-eeg-students.html">
                    Forney, E., "The power of EEG and student innovation".
                    Carnegie Mellon University, College of Engineering Magazine
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={`cv-section`}>
        <h3 className={`cv-section-title`}>
          Committees and Leadership Positions
        </h3>
        <table>
          <tbody>
            <tr>
              <td>2021</td>
              <td>
                <div>AIIDE-21 Artifact Evaluation Committee</div>
              </td>
            </tr>
            <tr>
              <td>2015 -2016</td>
              <td>
                <div>UD Computer animation and Game Design Club President</div>
              </td>
            </tr>
            <tr>
              <td>2014 - 2016</td>
              <td>
                <div>University of Delaware Mascot Team Captain</div>
              </td>
            </tr>
            <tr>
              <td>2014 - 2017</td>
              <td>
                <div>UD RISE Program Student Advisory Council</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={`cv-section`}>
        <h3 className={`cv-section-title`}>Awards, Honors, and Fellowships</h3>
        <table>
          <tbody>
            <tr>
              <td>2018 - 2019</td>
              <td>
                <div>
                  ORAU Journeyman Fellow @ US Army Research Lab, Human Research
                  &amp; Engineering Directorate
                </div>
              </td>
            </tr>
            <tr>
              <td>2018</td>
              <td>
                <div>
                  Carnegie Mellon University Graduate Small Research Grant
                </div>
              </td>
            </tr>
            <tr>
              <td>2017</td>
              <td>
                <div>
                  ORAU Summer Journeyman Fellow @ US Army Research Lab, Human
                  Research &amp; Engineering Directorate
                </div>
              </td>
            </tr>
            <tr>
              <td>2017</td>
              <td>
                <div>
                  UD Computer Information Sciences Department, Steven Geracimos
                  Memorial Reward
                </div>
              </td>
            </tr>
            <tr>
              <td>2015 - 2016</td>
              <td>
                <div>Microsoft Student Partner @ University of Delaware</div>
              </td>
            </tr>
            <tr>
              <td>2015</td>
              <td>
                <div>
                  UD College of Engineering, Elbert C. Wisener RISE Corporate
                  Friends Award
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={`cv-section`}>
        <h3 className={`cv-section-title`}>Teaching Positions</h3>
        <table>
          <tbody>
            <tr>
              <td>Winter 2022, Spring 2022</td>
              <td>
                <div>
                  Teaching Assistant, CMPM 80K: Foundations of Video Game
                  Design, UC Santa Cruz
                </div>
              </td>
            </tr>
            <tr>
              <td>Fall 2021</td>
              <td>
                <div>Teaching Assistant, CMPM 176: Game Systems</div>
              </td>
            </tr>
            <tr>
              <td>Spring 2017</td>
              <td>
                <div>
                  Undergraduate Teaching Assistant, CISC 181: Intro to Computer
                  Science II, University of Delaware
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={`cv-section`}>
        <h3 className={`cv-section-title`}>Research Positions</h3>
        <table>
          <tbody>
            <tr>
              <td>08/2019 - 06/2020</td>
              <td>
                <div>
                  Research Software Engineer @ US Army Research Lab, Computer
                  Information Sciences Directorate, Adaptive Computing Lab
                </div>
              </td>
            </tr>
            <tr>
              <td>10/2017 - 05/2019</td>
              <td>
                <div>
                  Graduate Student @ Carnegie Mellon University, ECE Department,
                  Neural Web Group
                </div>
              </td>
            </tr>
            <tr>
              <td>06/2015 - 08/2015</td>
              <td>
                <div>
                  Research Intern @ Johns Hopkins University, Mind Brain
                  Institute, Computational Neuroscience Lab
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={`cv-section`}>
        <h3 className={`cv-section-title`}>Software Engineering Positions</h3>
        <table>
          <tbody>
            <tr>
              <td>07/2021 - Present</td>
              <td>
                <div>
                  Co-Founder &amp; Lead Web Developer @ Jyackl LLC, Baltimore MD
                </div>
              </td>
            </tr>
            <tr>
              <td>06/2016 - 08/2016</td>
              <td>
                <div>Software Engineer Intern @ SevOne, Newark DE</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Container>
  </Layout>
)

export default CvPage
