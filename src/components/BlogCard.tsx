import React from "react"
import Img, { FluidObject } from "gatsby-image"

export interface BlogCardProps {
  title: string
  description: string
  slug: string
  imgData?: FluidObject
  imgUrl?: string
}

const BlogCard: React.FC<BlogCardProps> = props => {
  return (
    <div className={`project-card shadow`}>
      {props.imgData ? (
        <Img fluid={props.imgData} className={`card-background`} />
      ) : (
        <img src={props.imgUrl} className={`card-background`} />
      )}
      <a href={`${props.slug}`}>
        <div className={`card-tint`}></div>
      </a>

      <div className={`card-text`}>
        <div className={`title`}>{props.title}</div>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default BlogCard
