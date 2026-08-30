import { Plus, Share2 } from 'lucide-react'
import { useState } from 'react'
import styles from './App.module.css'
import { LuggageForm } from './components/luggage-form/LuggageForm'
import { LuggageList } from './components/luggage-list/LuggageList'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { LuggageItem } from './types/luggage'
import { formatShareText } from './utils/share'

export function App() {
  const [items, setItems] = useLocalStorage<LuggageItem[]>('bag-tag-items', [])
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<LuggageItem | null>(null)
  const [copied, setCopied] = useState(false)

  const handleSave = (item: LuggageItem) => {
    setItems((prev) =>
      editing ? prev.map((i) => (i.id === item.id ? item : i)) : [...prev, item]
    )
    closeForm()
  }

  const handleEdit = (item: LuggageItem) => {
    setEditing(item)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const handleShare = async () => {
    const text = formatShareText(items)
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const closeForm = () => {
    setShowForm(false)
    setEditing(null)
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Bag Tag</h1>
        {items.length > 0 && (
          <button className={styles.btnShare} onClick={handleShare} aria-label="Compartilhar">
            <Share2 size={18} />
            <span>{copied ? 'Copiado!' : 'Compartilhar'}</span>
          </button>
        )}
      </header>

      <main className={styles.main}>
        <LuggageList items={items} onEdit={handleEdit} onDelete={handleDelete} />
      </main>

      <button className={styles.fab} onClick={() => setShowForm(true)} aria-label="Adicionar item">
        <Plus size={28} />
      </button>

      {showForm && (
        <LuggageForm onSave={handleSave} onCancel={closeForm} editing={editing} />
      )}
    </div>
  )
}
