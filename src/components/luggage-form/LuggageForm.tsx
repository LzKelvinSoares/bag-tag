import { useEffect, useState } from 'react'
import { RESPONSAVEL_OPTIONS, TIPO_OPTIONS } from '../../constants/luggage'
import type { LuggageItem, Responsavel, Tipo } from '../../types/luggage'
import { Dropdown } from '../shared/Dropdown'
import { NumberInput } from '../shared/NumberInput'
import { TextArea } from '../shared/TextArea'
import { TextInput } from '../shared/TextInput'
import styles from './LuggageForm.module.css'

interface Props {
  onSave: (item: LuggageItem) => void
  onCancel: () => void
  editing: LuggageItem | null
}

const emptyForm = {
  tipo: 'Mala' as Tipo,
  numeracao: '',
  peso: '' as number | '',
  responsavel: 'Kelvin' as Responsavel,
  conteudo: '',
}

export function LuggageForm({ onSave, onCancel, editing }: Props) {
  const [form, setForm] = useState(emptyForm)

  useEffect(() => {
    if (editing) {
      setForm({
        tipo: editing.tipo,
        numeracao: editing.numeracao,
        peso: editing.peso,
        responsavel: editing.responsavel,
        conteudo: editing.conteudo,
      })
    } else {
      setForm(emptyForm)
    }
  }, [editing])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: editing?.id ?? crypto.randomUUID(),
      ...form,
      peso: Number(form.peso),
    })
  }

  return (
    <div className={styles.overlay} onClick={onCancel}>
      <form className={styles.formCard} onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <h2>{editing ? 'Editar item' : 'Novo item'}</h2>

        <div className={styles.formRow}>
          <Dropdown
            label="Tipo"
            value={form.tipo}
            options={TIPO_OPTIONS}
            onChange={(tipo) => setForm({ ...form, tipo })}
          />
          <TextInput
            label="Numeração"
            value={form.numeracao}
            placeholder="ex: 01"
            required
            onChange={(numeracao) => setForm({ ...form, numeracao })}
          />
        </div>

        <div className={styles.formRow}>
          <NumberInput
            label="Peso (kg)"
            value={form.peso}
            placeholder="ex: 12.5"
            step={0.1}
            min={0}
            required
            onChange={(peso) => setForm({ ...form, peso })}
          />
          <Dropdown
            label="Responsável"
            value={form.responsavel}
            options={RESPONSAVEL_OPTIONS}
            onChange={(responsavel) => setForm({ ...form, responsavel })}
          />
        </div>

        <TextArea
          label="Conteúdo"
          value={form.conteudo}
          placeholder="Descreva o conteúdo..."
          onChange={(conteudo) => setForm({ ...form, conteudo })}
        />

        <div className={styles.formActions}>
          <button type="button" className={styles.btnSecondary} onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" className={styles.btnPrimary}>
            {editing ? 'Salvar' : 'Adicionar'}
          </button>
        </div>
      </form>
    </div>
  )
}
