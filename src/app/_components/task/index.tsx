'use client'

import { useMutation } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { Id } from '../../../../convex/_generated/dataModel'
import { TrashSimple } from '@phosphor-icons/react'
import { Checkbox } from '@/components/checkbox'
import { Modal } from '@/components/modal'
import { Button } from '@/components/button'
import styles from './task.module.scss'

interface TaskProps {
  task: {
    title: string
    id: Id<'todos'>
    completed: boolean
  }
}

export const Task = ({ task }: TaskProps) => {
  const toggleTask = useMutation(api.tasks.toggleTask)
  const deleteTask = useMutation(api.tasks.deleteTask)

  const handleToggleTask = () => {
    return toggleTask({ id: task.id })
  }

  const handleDeleteTask = () => {
    return deleteTask({ id: task.id })
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <Checkbox checked={task.completed} onCheckedChange={handleToggleTask} />
        <span className={task.completed ? styles.completed : ''}>
          {task.title}
        </span>
      </label>
      <Modal.Root>
        <Modal.Trigger asChild>
          <button className={styles.button}>
            <TrashSimple size={24} />
          </button>
        </Modal.Trigger>
        <Modal.Content>
          <div className={styles.modalContainer}>
            <Modal.Title>Deletar Tarefa</Modal.Title>
            <p>Tem certeza que você deseja deletar essa tarefa?</p>
            <div className={styles.modalButtons}>
              <Modal.Close asChild>
                <Button variant="secondary">Cancelar</Button>
              </Modal.Close>
              <Button variant="danger" onClick={handleDeleteTask}>
                Deletar
              </Button>
            </div>
          </div>
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}
