import { TasksContainer } from '@/components/tasks-container'
import { CreateTask } from '@/components/create-task'
import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <TasksContainer />
      <CreateTask />
    </main>
  )
}
