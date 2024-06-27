import { Avatar, Header, Name } from './styles'

type Props = {
  nomeUsuario: string
}

const Perfil = ({ nomeUsuario }: Props) => (
  <Header>
    <Avatar src={`http://github.com/${nomeUsuario}.png`} />
    <Name>{nomeUsuario}</Name>
  </Header>
)

export default Perfil
