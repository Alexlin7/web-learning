import Header from "../components/Header"
import GlobalStyles from "../components/style/Global"
import Form from "../components/LoginForm"
import Container from "../components/style/Container.styled"

export default function HomePage() {
    return (
      <Container>
        <GlobalStyles />
        <Header />
        <Form />
      </Container>
    )
}