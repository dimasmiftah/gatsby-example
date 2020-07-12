import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const BlueTitle = styled.h1`
  color: blue;
  text-transform: lowercase;
`

const Home = () => {
  return (
    <Layout>
      <BlueTitle>Hello world!</BlueTitle>
      <BlueTitle>another h1</BlueTitle>
      <BlueTitle>another h1</BlueTitle>
      <BlueTitle>another h1</BlueTitle>
      <BlueTitle>another h1</BlueTitle>
    </Layout>
  )
}
export default Home
