import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getMetadata = graphql`
  query getMetadata {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
const Metadata = () => {
  const {
    site: {
      info: { author, description, title },
    },
  } = useStaticQuery(getMetadata)
  return (
    <div>
      <h3>{title}</h3>
      <h4> {author}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Metadata
