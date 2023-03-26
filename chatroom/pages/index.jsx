import Header from "../components/Header"
import GlobalStyles from "../components/style/Global"
import Form from "../components/LoginForm"
import Container from "../components/style/Container.styled"
import { useState } from "react"



export default function HomePage() {
  const [click, setClick] = useState(false)
  return (
    <Container>
      <GlobalStyles />
      <Header click = { click } setClick = { setClick } />
      <Form click = { click } />
    </Container>
  )
}