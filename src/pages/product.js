import React from "react"
import Layout from "../components/Layout"
import styles from "../components/product.module.css"

const product = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.text}>This is the product page</h1>
      </div>
    </Layout>
  )
}

export default product
