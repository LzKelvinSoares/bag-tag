export type Tipo = 'Mala' | 'Caixa'
export type Responsavel = 'Thuanny' | 'Kelvin' | 'Heitor'

export interface LuggageItem {
  id: string
  tipo: Tipo
  numeracao: string
  peso: number
  responsavel: Responsavel
  conteudo: string
}
