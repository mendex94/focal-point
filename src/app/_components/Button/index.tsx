import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', ...props }, ref) => {
    const classNames = `${styles.button} ${styles[variant]}`

    return <button {...props} ref={ref} className={classNames} />
  },
)

Button.displayName = 'Button'
