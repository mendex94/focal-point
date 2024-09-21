'use client'

import { useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { Task } from '@/components/task'
import styles from './tasks-container.module.scss'

export const TasksContainer = () => {
  const tasks = useQuery(api.tasks.getUserTasks)

  if (!tasks) {
    return (
      <section className={styles.container}>
        <p className={styles.heading}>Carregando...</p>
      </section>
    )
  }

  const renderTasks = (completed: boolean) =>
    tasks
      .filter((todo) => todo.completed === completed)
      .map((todo) => (
        <Task
          task={{
            title: todo.title,
            completed: todo.completed,
            id: todo._id,
          }}
          key={todo._id}
        />
      ))

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Suas tarefas de hoje</h2>
      {renderTasks(false).length === 0 ? (
        <span className={styles.heading}>Nenhuma tarefa para hoje.</span>
      ) : (
        renderTasks(false)
      )}
      {renderTasks(true).length === 0 ? null : (
        <>
          <h3 className={styles.heading}>Tarefas finalizadas</h3>
          {renderTasks(true)}
        </>
      )}
    </section>
  )
}
