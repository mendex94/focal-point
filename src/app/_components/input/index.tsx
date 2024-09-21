import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <input {...props} ref={ref} className={styles.input} />
  },
)

Input.displayName = 'Input'
