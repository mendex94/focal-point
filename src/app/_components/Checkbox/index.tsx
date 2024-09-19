import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from '@phosphor-icons/react/dist/ssr'
import styles from './Checkbox.module.scss'

export type CheckboxProps = ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ ...props }, forwardedRef) => {
  return (
    <CheckboxPrimitive.Root
      ref={forwardedRef}
      {...props}
      className={styles.root}
    >
      <CheckboxPrimitive.Indicator className={styles.indicator} asChild>
        <Check weight="bold" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = 'Checkbox'
