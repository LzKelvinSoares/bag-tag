import styles from './FormField.module.css'

interface Props<T extends string> {
  label: string
  value: T
  options: T[]
  onChange: (value: T) => void
}

export function Dropdown<T extends string>({ label, value, options, onChange }: Props<T>) {
  return (
    <label className={styles.label}>
      {label}
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
