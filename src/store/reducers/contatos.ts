// import { Contato } from './../../components/Contato/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContatoClass from '../../models/Contato'

type ContatosState = {
  itens: ContatoClass[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Maicon Veiga',
      email: 'veiga.maicon@gmail.com',
      telefone: '21999999999'
    },
    {
      id: 2,
      nome: 'Caroline Alves',
      email: 'a.sousa.caroline@gmail.com',
      telefone: '21999999999'
    },
    {
      id: 3,
      nome: 'Micael Alves',
      email: 'alves.micael@gmail.com',
      telefone: '21999999999'
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    deletar: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { deletar, editar } = contatosSlice.actions
export default contatosSlice.reducer
