import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import styles from './modal.module.scss'

type DialogContentProps = ComponentPropsWithoutRef<typeof Dialog.Content>

const ModalRoot = Dialog.Root

const ModalTrigger = Dialog.Trigger

const ModalClose = Dialog.Close

const ModalTitle = Dialog.Title

const ModalContent = forwardRef<
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
ModalClose.displayName = 'Modal.Close'
ModalTitle.displayName = 'Modal.Title'

export const Modal = {
  Root: ModalRoot,
  Content: ModalContent,
  Trigger: ModalTrigger,
  Close: ModalClose,
  Title: ModalTitle,
}
