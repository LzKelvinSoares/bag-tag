import type { LuggageItem } from '../types/luggage';

export function sortByNumber(items: LuggageItem[]) {
  const sorted = [...items].sort((a, b) =>
    a.numeracao.localeCompare(b.numeracao, undefined, { numeric: true })
  )
  return sorted;
}