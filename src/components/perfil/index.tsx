import { Avatar, DivIcon, Header, IconImg, Name } from './styles'
import python from '../../images/python-original.svg'
import react from '../../images/react-original.svg'
import redux from '../../images/redux-original.svg'
import jquery from '../../images/jquery-original.svg'
import javascript from '../../images/javascript-original.svg'
import typescript from '../../images/typescript-original.svg'
import html from '../../images/html5-original.svg'
import css from '../../images/css3-original.svg'

type Props = {
  nomeUsuario: string
}

const Perfil = ({ nomeUsuario }: Props) => (
  <Header>
    <Avatar src={`http://github.com/${nomeUsuario}.png`} />
    <Name>Denis Oliveira</Name>
    <DivIcon>
      <IconImg src={python} />
      <IconImg src={react} />
      <IconImg src={typescript} />
      <IconImg src={redux} />
      <hr />
      <IconImg src={javascript} />
      <IconImg src={html} />
      <IconImg src={css} />
      <IconImg src={jquery} />
    </DivIcon>
    <p>Desenvolvedor FullStack</p>
  </Header>
)

export default Perfil
