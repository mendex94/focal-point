'use client'

import { useState } from 'react'
import { useMutation } from 'convex/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Modal } from '@/components/modal'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { api } from '../../../../convex/_generated/api'
import styles from './create-task.module.scss'

const createTaskSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'O título deve ter no mínimo 3 caracteres.' })
    .max(30, { message: 'O título deve ter no máximo 30 caracteres.' }),
})

type CreateTaskSchema = z.infer<typeof createTaskSchema>

export const CreateTask = () => {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTaskSchema>({
    resolver: zodResolver(createTaskSchema),
  })
  const createTask = useMutation(api.tasks.createTask)

  const handleCreateTask = (data: CreateTaskSchema) => {
    createTask({
      title: data.title,
    })
    reset()
    setOpen((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild>
          <Button>Adicionar nova tarefa</Button>
        </Modal.Trigger>
        <Modal.Content>
          <form
            className={styles.modalContainer}
            onSubmit={handleSubmit(handleCreateTask)}
          >
            <Modal.Title>Nova tarefa</Modal.Title>
            <div className={styles.form}>
              <label htmlFor="title">Título</label>
              <Input placeholder="Digite" id="title" {...register('title')} />
              {errors.title && (
                <span className={styles.formError}>{errors.title.message}</span>
              )}
            </div>
            <div className={styles.buttonContainer}>
              <Modal.Close asChild>
                <Button variant="secondary">Cancelar</Button>
              </Modal.Close>
              <Button type="submit">Adicionar</Button>
            </div>
          </form>
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}
