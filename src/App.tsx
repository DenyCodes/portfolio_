import Perfil from './components/perfil'
import RepoList from './components/RepoList'
import { Container, GlobalCss } from './GlobalStyle'

function App() {
  return (
    <>
      <GlobalCss />
      <Perfil nomeUsuario={'denycodes'} />
      <Container>
        <RepoList nomeUsuario={'denycodes'} />
      </Container>
    </>
  )
}

export default App
