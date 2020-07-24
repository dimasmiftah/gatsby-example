import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import styles from "../components/product.module.css"

const product = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid}></Image>
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/` + product.slug}>More details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getAllProduct {
    allContentfulProduct {
      nodes {
        id
        title
        slug
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default product
