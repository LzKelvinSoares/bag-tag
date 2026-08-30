import styles from './FormField.module.css'

interface Props {
  label: string
  value: number | ''
  placeholder?: string
  step?: number
  min?: number
  required?: boolean
  onChange: (value: number | '') => void
}

export function NumberInput({ label, value, placeholder, step, min, required, onChange }: Props) {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="number"
        value={value}
        placeholder={placeholder}
        step={step}
        min={min}
        required={required}
        onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
      />
    </label>
  )
}
