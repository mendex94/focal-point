'use client'

import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import styles from './Modal.module.scss'

type DialogContentProps = ComponentPropsWithoutRef<typeof Dialog.Content>

export const ModalRoot = Dialog.Root

export const ModalTrigger = Dialog.Trigger

export const ModalContent = forwardRef<
  ElementRef<typeof Dialog.Content>,
  DialogContentProps
>(({ children, ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay className={styles.overlay} />
    <Dialog.Content {...props} ref={ref} className={styles.content}>
      {children}
    </Dialog.Content>
  </Dialog.Portal>
))

ModalRoot.displayName = 'Modal.Root'
ModalTrigger.displayName = 'Modal.Trigger'
ModalContent.displayName = 'Modal.Content'
