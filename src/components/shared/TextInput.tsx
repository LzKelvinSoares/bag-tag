import styles from './FormField.module.css'

interface Props {
  label: string
  value: string
  placeholder?: string
  required?: boolean
  onChange: (value: string) => void
}

export function TextInput({ label, value, placeholder, required, onChange }: Props) {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
