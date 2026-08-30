import { Pencil, Trash2, User, Weight } from 'lucide-react'
import type { LuggageItem } from '../../types/luggage'
import styles from './LuggageCard.module.css'

interface Props {
  item: LuggageItem
  onEdit: (item: LuggageItem) => void
  onDelete: (id: string) => void
}

export function LuggageCard({ item, onEdit, onDelete }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTag}>
          <span className={`${styles.tipoBadge} ${styles[item.tipo.toLowerCase() as 'mala' | 'caixa']}`}>
            {item.tipo}
          </span>
          <span className={styles.numeracao}>#{item.numeracao}</span>
        </div>
        <div className={styles.cardActions}>
          <button className={styles.btnIcon} onClick={() => onEdit(item)} aria-label="Editar">
            <Pencil size={16} />
          </button>
          <button
            className={`${styles.btnIcon} ${styles.danger}`}
            onClick={() => onDelete(item.id)}
            aria-label="Remover"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.metaItem}>
            <User size={14} />
            {item.responsavel}
          </span>
          <span className={styles.metaItem}>
            <Weight size={14} />
            {item.peso} kg
          </span>
        </div>
        {item.conteudo && <p className={styles.conteudo}>{item.conteudo}</p>}
      </div>
    </div>
  )
}
