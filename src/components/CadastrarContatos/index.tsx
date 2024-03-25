import { IMaskInput } from 'react-imask'
import { Formulario } from './styles'

export const CadastrarContato = () => {
  return (
    <>
      <Formulario>
        <input required type="text" placeholder="Nome completo" />
        <input required type="email" placeholder="melhor e-mail" />
        <IMaskInput required mask="(00)0 0000-0000" placeholder="Telefone" />
        <button type="submit">Salvar</button>
      </Formulario>
    </>
  )
}
