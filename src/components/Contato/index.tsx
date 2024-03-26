import { useState } from 'react'
import * as S from './styles'
import { IMaskInput } from 'react-imask'

type Props = {
  nome: string
  email: string
  telefone: string
}
export const Contato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.DadosContato>
        <S.DadoContato required disabled={!estaEditando} value={nome} />
        <S.DadoContato required disabled={!estaEditando} value={email} />
        <IMaskInput
          disabled={!estaEditando}
          required
          mask="(00)0 0000-0000"
          placeholder="Telefone"
          value={telefone}
        />
      </S.DadosContato>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoSair onClick={() => setEstaEditando(false)}>
              Sair
            </S.BotaoSair>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoDeletar>Deletar</S.BotaoDeletar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
