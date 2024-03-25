import { Buscador } from '../../components/Buscador'
import { CadastrarContato } from '../../components/CadastrarContatos'
import { BarraLateralStyle } from './styles'

const BarraLateral = () => {
  return (
    <>
      <BarraLateralStyle>
        <Buscador />
        <CadastrarContato />
      </BarraLateralStyle>
    </>
  )
}

export default BarraLateral
