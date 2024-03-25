import { IMaskInput } from 'react-imask'
import { BotaoApagar, BotaoEditar, Item, Lista } from './style'

export const ListaDeContatos = () => {
  const contatos = [
    {
      id: 1,
      nome: 'João',
      emai: 'xpto1@gmail.com',
      tel: '21977777777'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    },
    {
      id: 2,
      nome: 'Maria',
      emai: 'xpto2@gmail.com',
      tel: '21988888888'
    },
    {
      id: 3,
      nome: 'José',
      emai: 'xpto3@gmail.com',
      tel: '21999999999'
    }
  ]

  return (
    <>
      <Lista>
        {contatos.map((c) => (
          <Item key={c.id}>
            <input type="text" value={c.nome} />
            <input type="text" value={c.emai} />
            <IMaskInput
              required
              mask="(00)0 0000-0000"
              placeholder="Telefone"
              value={c.tel}
            />
            <BotaoEditar type="button">Editar</BotaoEditar>
            <BotaoApagar type="button">Apagar</BotaoApagar>
          </Item>
        ))}
      </Lista>
    </>
  )
}
