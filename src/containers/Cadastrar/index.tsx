import { IMaskInput } from 'react-imask'

const Cadastros = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="melhor e-mail" />
        <IMaskInput mask="(00)0 0000-0000" placeholder="Telefone" />
        <button type="submit">Salvar</button>
      </form>
    </>
  )
}

export default Cadastros
