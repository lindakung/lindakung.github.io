import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"


export default function About() {
  return (
    <Container>
      <h1>Hello! I'm Linda.</h1>
      <p>Currently @<a href="https://jetty.com" style={{ color: "#00bfb6"}}>Jetty</a></p> 
			<p>This is not complete.</p>
			<p><a href="https://github.com/lindakung">github</a></p>
    </Container>
  )
}
