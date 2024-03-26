import { Contato } from '../../components/Contato'
import { SecaoPrincipalStyle } from './styles'

const contatos = [
  {
    id: 1,
    nome: 'João Melo',
    email: 'jjmelo@gmail.com',
    telefone: '21999999999'
  },
  {
    id: 2,
    nome: 'João Melo',
    email: 'jjmelo@gmail.com',
    telefone: '21999999999'
  },
  {
    id: 3,
    nome: 'João Melo',
    email: 'jjmelo@gmail.com',
    telefone: '21999999999'
  },
  {
    id: 4,
    nome: 'João Melo',
    email: 'jjmelo@gmail.com',
    telefone: '21999999999'
  },
  {
    id: 5,
    nome: 'João Melo',
    email: 'jjmelo@gmail.com',
    telefone: '21999999999'
  },
  {
    id: 6,
    nome: 'João Melo',
    email: 'jjmelo@gmail.com',
    telefone: '21999999999'
  },
  {
    id: 7,
    nome: 'João Melo',
    email: 'jjmelo@gmail.com',
    telefone: '21999999999'
  },
  {
    id: 8,
    nome: 'João Melo',
    email: 'jjmelo@gmail.com',
    telefone: '21999999999'
  }
]

export const SecaoPrincipal = () => {
  return (
    <SecaoPrincipalStyle>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato nome={c.nome} email={c.email} telefone={c.telefone} />
          </li>
        ))}
      </ul>
    </SecaoPrincipalStyle>
  )
}
