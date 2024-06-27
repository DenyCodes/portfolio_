import Footer from './components/Footer'
import Perfil from './components/perfil'
import RepoList from './components/RepoList'
import Sociais from './components/Sociais'
import { Container, GlobalCss } from './GlobalStyle'

function App() {
  return (
    <>
      <GlobalCss />
      <Perfil nomeUsuario={'denycodes'} />
      <Container>
        <Sociais />
        <RepoList nomeUsuario={'denycodes'} />
      </Container>
      <Footer />
    </>
  )
}

export default App
