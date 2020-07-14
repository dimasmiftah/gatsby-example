import React from "react"
import { StaticQuery, graphql } from "gatsby"

const MetadataStatic = () => (
  <StaticQuery
    query={graphql`
      query getMetadataStatic {
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
    `}
    render={data => (
      <>
        <h2>From StaticQuery</h2>
        <h3>{data.site.info.title}</h3>
      </>
    )}
  ></StaticQuery>
)

export default MetadataStatic
