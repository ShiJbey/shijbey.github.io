import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

interface QueryResponse {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        title: string
        description?: string
        date?: string
        category?: string
        featuredImage?: any
      }
      fields: {
        slug: string
      }
    }[]
  }
}

const ProjectGrid: React.FC = () => {
  const query: QueryResponse = useStaticQuery(graphql`
    query ProjectPreviewQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { private: { ne: true }, category: { eq: "project" } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            description
            date
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  return (
    <div className={`project-grid`}>
      {query.allMarkdownRemark.nodes.map((project, index) => {
        const { title, description } = project.frontmatter
        const { slug } = project.fields
        const imgData =
          project.frontmatter?.featuredImage?.childImageSharp?.fluid
        return (
          <div key={`project_${index}`} className={`project-card shadow`}>
            {imgData ? (
              <Img fluid={imgData} className={`card-background`} />
            ) : (
              <img
                src={project.frontmatter?.featuredImage?.publicURL}
                className={`card-background`}
              />
            )}

            <a href={`${slug}`}>
              <div className={`card-tint`}></div>
            </a>

            <div className={`card-text`}>
              <div className={`title`}>{title}</div>
              <p>{description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectGrid
