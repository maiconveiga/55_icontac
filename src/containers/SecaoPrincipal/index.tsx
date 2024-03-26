import { Contato } from '../../components/Contato'
import { SecaoPrincipalStyle } from './styles'

export const SecaoPrincipal = () => {
  return (
    <SecaoPrincipalStyle>
      <ul>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
        <li>
          <Contato />
        </li>
      </ul>
    </SecaoPrincipalStyle>
  )
}
