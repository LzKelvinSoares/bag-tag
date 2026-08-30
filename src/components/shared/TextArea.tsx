import styles from './FormField.module.css'

interface Props {
  label: string
  value: string
  placeholder?: string
  rows?: number
  onChange: (value: string) => void
}

export function TextArea({ label, value, placeholder, rows = 3, onChange }: Props) {
  return (
    <label className={styles.label}>
      {label}
      <textarea
        className={styles.textarea}
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
