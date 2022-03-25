import React from "react"
import { graphql, useStaticQuery } from "gatsby"

interface QueryResponse {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        title: string
        description?: string
        date?: string
        category?: string
      }
      fields: {
        slug: string
      }
    }[]
  }
}

const BlogGrid: React.FC = () => {
  const query: QueryResponse = useStaticQuery(graphql`
    query BlogPreviewQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { private: { ne: true }, category: { eq: "blog" } }
        }
      ) {
        nodes {
          frontmatter {
            title
            description
            date
            category
            private
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: "grid",
        gap: "1.5rem",
        placeContent: "start",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {query.allMarkdownRemark.nodes.map((project, index) => {
        const { title, description } = project.frontmatter
        const { slug } = project.fields
        return (
          <div key={`project_${index}`}>
            <a href={`${slug}`}>
              <h3>{title}</h3>
            </a>
            <p>{description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BlogGrid
