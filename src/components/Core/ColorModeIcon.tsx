import { memo, useCallback, useMemo } from 'react'

import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton'
import { useColorScheme } from '@mui/material/styles'

import { DarkMode, LightMode } from '@mui/icons-material'

const ColorModeIcon = (props: IconButtonOwnProps) => {
  const { mode, systemMode, setMode } = useColorScheme()
  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  const handleClick = useCallback(() => {
    setMode(resolvedMode === 'dark' ? 'light' : 'dark')
  }, [resolvedMode, setMode])

  const icon = useMemo(() => (resolvedMode === 'dark' ? <LightMode /> : <DarkMode />), [resolvedMode])

  return (
    <IconButton
      data-screenshot='toggle-mode'
      onClick={handleClick}
      disableRipple
      aria-label={`Toggle ${resolvedMode === 'dark' ? 'light' : 'dark'} mode`}
      sx={{
        '&:hover': {
          backgroundColor: 'transparent',
          opacity: 0.8
        }
      }}
      {...props}
    >
      {icon}
    </IconButton>
  )
}

export default memo(ColorModeIcon)
