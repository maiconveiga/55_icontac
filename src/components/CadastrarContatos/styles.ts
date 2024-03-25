import { styled } from 'styled-components'

export const Formulario = styled.form`
  margin-top: 10px;
  input {
    width: 100%;
    border-radius: 7px;
    margin-top: 5px;
    color: black;
    outline: none;
    border: none;
    padding: 8px 0;
  }

  ::-webkit-input-placeholder {
    color: grey;
  }
  ::-ms-input-placeholder {
    color: grey;
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
    cursor: pointer;
  }
`
