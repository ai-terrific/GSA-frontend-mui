import Dialog from '@mui/material/Dialog'
import { ComponentType, FC, memo, useMemo } from 'react'

import Address from '@/components/Submission/Shipping/AddAddress'
import { useDialog } from '@/hooks'

// Strongly type the dialog names
const DIALOG_NAMES = {
  ADDRESS: 'address'
} as const

type DialogName = keyof typeof DIALOG_NAMES
type DialogType = (typeof DIALOG_NAMES)[DialogName]

// Map dialog names to their corresponding components
const DIALOG_COMPONENTS: Record<DialogType, ComponentType> = {
  [DIALOG_NAMES.ADDRESS]: Address
}

const DialogsComponent: FC = () => {
  const { activeDialog, closeDialog } = useDialog()

  // Memoize the dialog component to prevent unnecessary re-renders
  const DialogComponent = useMemo(
    () => (activeDialog ? DIALOG_COMPONENTS[activeDialog as DialogType] : null),
    [activeDialog]
  )

  return (
    <Dialog open={!!activeDialog} onClose={closeDialog} maxWidth='sm' aria-labelledby='dialog-title'>
      {DialogComponent && <DialogComponent />}
    </Dialog>
  )
}

export default memo(DialogsComponent)
