import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"
import { ExampleButton } from "../components/Button"

const Blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.text}>This is this blog page</h1>
        <ExampleButton>The hello button</ExampleButton>
      </div>
    </Layout>
  )
}

export default Blog
