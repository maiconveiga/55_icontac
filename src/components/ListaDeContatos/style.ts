import styled from 'styled-components'

export const Lista = styled.ul`
  margin: 20px auto;
  width: 95%;
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 0.5px solid black;
  input {
    width: 100%;
    background-color: transparent;
    margin: 5px;
    color: black;
    outline: none;
    border: none;
    padding: 8px 0;
  }
`

export const BotaoEditar = styled.button`
  margin: 5px 0;
  width: 30%;
  background-color: rgb(200, 200, 0);
  color: white;
  border-radius: 7px;
  outline: none;
  border: none;
  padding: 8px 0;
  margin-right: 5px;
  cursor: pointer;
`
export const BotaoApagar = styled.button`
  margin: 5px 0;
  width: 30%;
  background-color: red;
  color: white;
  border-radius: 7px;
  outline: none;
  border: none;
  padding: 8px 0;
  cursor: pointer;
`
