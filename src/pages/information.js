import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Metadata from "../data/Metadata"
import MetadataStatic from "../data/MetadataStatic"
import styles from "../components/information.module.css"

const information = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.text}>This is the information page</h1>
        <Metadata />
        <hr />
        <MetadataStatic />
        <hr />
        <h2>From PageQuery</h2>
        <h3>{author}</h3>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query getMetadataPage {
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

export default information
