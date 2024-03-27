import { useSelector } from 'react-redux'
import { Contato } from '../../components/Contato'
import { SecaoPrincipalStyle } from './styles'
import { RootReducer } from '../../store'

export const SecaoPrincipal = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <SecaoPrincipalStyle>
      <ul>
        {itens.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </SecaoPrincipalStyle>
  )
}
