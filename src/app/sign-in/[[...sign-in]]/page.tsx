import { SignIn } from '@clerk/nextjs'
import styles from './signin.module.scss'

export default function Page() {
  return (
    <main className={styles.container}>
      <SignIn />
    </main>
  )
}
