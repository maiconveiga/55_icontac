import BarraLateral from './containers/BarraLateral'
import EstiloGlobal, { ContainerGeral } from './globalStyles'
import { SecaoPrincipal } from './containers/SecaoPrincipal'

function App() {
  return (
    <>
      <EstiloGlobal />
      <ContainerGeral>
        <BarraLateral />
        <SecaoPrincipal />
      </ContainerGeral>
      {/* Parei na aula Construa o componente de filtro */}
    </>
  )
}

export default App
