import type { LuggageItem } from '../../types/luggage'
import { LuggageCard } from '../luggage-card/LuggageCard'
import styles from './LuggageList.module.css'

interface Props {
  items: LuggageItem[]
  onEdit: (item: LuggageItem) => void
  onDelete: (id: string) => void
}

export function LuggageList({ items, onEdit, onDelete }: Props) {
  if (items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>Nenhum item cadastrado.</p>
        <p>Toque em + para adicionar.</p>
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <LuggageCard item={item} onEdit={onEdit} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}
