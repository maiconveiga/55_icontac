import { IMaskInput } from 'react-imask'
import { Formulario } from './styles'
import { BotaoSalvar } from '../Contato/styles'

export const CadastrarContato = () => {
  return (
    <>
      <Formulario>
        <input required type="text" placeholder="Nome completo" />
        <input required type="email" placeholder="melhor e-mail" />
        <IMaskInput required mask="(00)0 0000-0000" placeholder="Telefone" />
        <BotaoSalvar type="submit">Salvar</BotaoSalvar>
      </Formulario>
    </>
  )
}
