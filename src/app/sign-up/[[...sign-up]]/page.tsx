import { SignUp } from '@clerk/nextjs'
import styles from './signup.module.scss'

export default function Page() {
  return (
    <main className={styles.container}>
      <SignUp />
    </main>
  )
}
