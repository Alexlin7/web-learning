import Header from "../components/Header"
import GlobalStyles from "../components/style/Global"
import Form from "../components/LoginForm"
import Container from "../components/Container"
import { useState } from "react"

export default function HomePage() {
  const [click, setClick] = useState(false)
  return (
    <>
      <GlobalStyles />
      <Header click = { click } setClick = { setClick } />
      <Container click = { click } />
      <Form click = { click } setClick = { setClick } />
      
    </>
  )
}