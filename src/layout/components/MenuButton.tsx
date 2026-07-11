import { IconButton } from '@mui/material'
import { memo } from 'react'

import AppIcon from '@/components/Core/AppIcon'

// Sub-components
export const MenuButton = memo(({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick} aria-label='Login' sx={{ width: 40, height: 40 }}>
    <AppIcon name='user' size={16} />
  </IconButton>
))
MenuButton.displayName = 'MenuButton'
