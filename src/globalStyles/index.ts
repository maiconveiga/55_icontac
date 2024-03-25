import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-style: normal;
}
`

export const ContainerGeral = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
`
export default EstiloGlobal
