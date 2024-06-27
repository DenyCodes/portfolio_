import linkedin from '../../images/Linkedin.png'
import github from '../../images/Vector.png'

import { GitFoot, Image, LinkFoot, Socials } from './styles'

const Sociais = () => (
  <Socials>
    <GitFoot>
      <a href="https://github.com/DenyCodes">
        <Image src={github} />
        Meu Github
      </a>
    </GitFoot>
    <LinkFoot>
      <a href="https://www.linkedin.com/in/denisoliveiradev">
        <Image src={linkedin} />
        Meu Linkedin
      </a>
    </LinkFoot>
  </Socials>
)

export default Sociais
