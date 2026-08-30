import type { LuggageItem } from '../types/luggage'
import { sortByNumber } from './helpers'

export function formatShareText(items: LuggageItem[]): string {
  const totalPeso = items.reduce((sum, i) => sum + i.peso, 0)
  const header = `🧳 Controle de Bagagens\nTotal: ${items.length} ${items.length === 1 ? 'item' : 'itens'} | ${totalPeso.toFixed(1)} kg\n`

  const lines = sortByNumber(items).map((item, index) => {
    const rows = [
      `${index + 1}. ${item.tipo} #${item.numeracao} — ${item.responsavel}`,
      `   Peso: ${item.peso} kg`,
    ]
    if (item.conteudo) rows.push(`   Conteúdo: ${item.conteudo}`)
    return rows.join('\n')
  })

  return [header, ...lines].join('\n')
}
