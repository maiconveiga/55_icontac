import { styled } from 'styled-components'

export const Formulario = styled.form`
  input {
    width: 100%;
    border-radius: 7px;
    margin-top: 5px;
    background-color: rgb(0, 100, 180);
    color: white;
    outline: none;
    border: none;
    padding: 8px 0;
  }

  ::-webkit-input-placeholder {
    color: white;
  }
  ::-ms-input-placeholder {
    color: white;
  }

  button {
    margin-top: 5px;
    width: 100%;
    background-color: green;
    color: white;
    border-radius: 7px;
    outline: none;
    border: none;
    padding: 8px 0;
  }
`
