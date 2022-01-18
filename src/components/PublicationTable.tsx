import React from "react"
import { Table, Button } from "react-bootstrap"

interface PublicationEntry {
  title: string
  year: string
  downloadLink: string
}

const PublicationTable: React.FC = () => {
  const publications: PublicationEntry[] = [
    {
      year: "2021",
      title:
        "Centrifuge: A Visual Tool for Authoring Sifting Patterns for Character-Based Simulationist Story Worlds",
      downloadLink: "publications/Johnson-Bey_Centrifuge_PLIE2021.pdf",
    },
    {
      year: "2020",
      title:
        "A novel approach towards computing global maps for multi-robotic operations in tactical environments",
      downloadLink: "publications/DLC_SPIE_2020.pdf",
    },
    {
      year: "2018",
      title:
        "Head movements are correlated with other measures of visual attention at smaller spatial scales",
      downloadLink: "publications/08362264.pdf",
    },
    {
      year: "2017",
      title:
        "Head movements during visual exploration of natural images in virtual reality",
      downloadLink: "publications/HeadMovementsDuringVisualExploration.pdf",
    },
  ]

  return (
    <Table striped bordered hover className="bg-white shadow">
      <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        {publications.map((pub, index) => (
          <tr key={`pub_entry_${index}`}>
            <td>{pub.year}</td>
            <td>{pub.title}</td>
            <td>
              <a
                href={pub.downloadLink}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Button
                  variant="primary"
                  style={{ width: "100%", color: "white", margin: "auto" }}
                  className="m-auto"
                >
                  <i className="fas fa-download" />
                  Download
                </Button>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PublicationTable
