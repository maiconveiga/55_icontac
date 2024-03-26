import * as S from './styles'

export const Contato = () => {
  return (
    <S.Card>
      <S.DadosContato>
        <S.DadoContato disabled={true}>Maicon Veiga</S.DadoContato>
        <S.DadoContato disabled={true}>veiga.maicon@gmail.com</S.DadoContato>
        <S.DadoContato disabled={true}>21997777747</S.DadoContato>
      </S.DadosContato>
      <S.BarraAcoes>
        <S.Botao>Editar</S.Botao>
        <S.Botao>Deletar</S.Botao>
      </S.BarraAcoes>
    </S.Card>
  )
}
