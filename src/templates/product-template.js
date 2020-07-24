import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

const productTemplate = ({
  data: {
    products: {
      title,
      price,
      info: { info },
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">Back to product</Link>
        <h1 className="title">Single Products: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed}></Image>
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>Add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($slug: String) {
    products: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      info {
        info
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default productTemplate
