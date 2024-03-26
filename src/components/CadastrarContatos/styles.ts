import { styled } from 'styled-components'
import variaveis from '../../globalStyles/variaveis'

export const Formulario = styled.form`
  margin-top: 10px;
  input {
    width: 100%;
    border-radius: 7px;
    margin-top: 5px;
    color: ${variaveis.dadosLetraCor};
    outline: none;
    border: none;
    padding: 8px 0;
  }

  ::-webkit-input-placeholder {
    color: ${variaveis.secaoPrincipalCor};
  }
  ::-ms-input-placeholder {
    color: ${variaveis.secaoPrincipalCor};
  }

  button {
    margin-top: 5px;
    width: 100%;
  }
`
