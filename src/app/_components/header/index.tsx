'use client'

import Image from 'next/image'
import { useUser, UserButton } from '@clerk/nextjs'
import { formatDate } from '@/utils/formatDate'
import styles from './header.module.scss'

export const Header = () => {
  const { user } = useUser()

  if (!user) return null

  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="FocalPoint Logo" width={150} height={36} />
      <div className={styles.container}>
        <h1
          className={styles.heading}
        >{`Bem-vindo de volta, ${user?.firstName === undefined ? '...' : user?.firstName}`}</h1>
        <UserButton />
      </div>
      <p className={styles.date}>{formatDate(Date.now())}</p>
    </header>
  )
}
