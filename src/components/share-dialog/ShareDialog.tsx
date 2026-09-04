import { Check, Copy, Share2, X } from 'lucide-react'
import { useState } from 'react'
import type { LuggageItem } from '../../types/luggage'
import { formatShareText } from '../../utils/share'
import styles from './ShareDialog.module.css'

interface Props {
  items: LuggageItem[]
  onClose: () => void
}

export function ShareDialog({ items, onClose }: Props) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)
  const text = formatShareText(items)
  const canShare = typeof navigator.share === 'function'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setError(false)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setError(true)
    }
  }

  const handleShare = async () => {
    try {
      await navigator.share({ text })
      onClose()
    } catch (shareError) {
      if (shareError instanceof DOMException && shareError.name === 'AbortError') return
      setError(true)
    }
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <section
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Exportar lista</p>
            <h2 id="share-title">Compartilhar bagagens</h2>
          </div>
          <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        <textarea className={styles.preview} value={text} readOnly aria-label="Texto para compartilhar" />

        {error && <p className={styles.error}>Não foi possível compartilhar. Tente copiar o texto.</p>}

        <div className={styles.actions}>
          <button className={styles.copyButton} onClick={handleCopy}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copiado!' : 'Copiar texto'}
          </button>
          {canShare && (
            <button className={styles.shareButton} onClick={handleShare}>
              <Share2 size={18} />
              Compartilhar
            </button>
          )}
        </div>
      </section>
    </div>
  )
}