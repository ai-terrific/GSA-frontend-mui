import { ReactNode, useMemo } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { colorSchemes, shadows, shape, typography, spacing } from './themePrimitives'
import { customizations } from './customizations'

interface AppThemeProps {
  children: ReactNode
}

export const AppTheme = (props: AppThemeProps) => {
  const { children } = props
  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: {
          colorSchemeSelector: 'data-mui-color-scheme',
          cssVarPrefix: 'template'
        },
        colorSchemes,
        defaultColorScheme: 'light',
        typography,
        shadows,
        shape,
        spacing,
        components: customizations
      }),
    []
  )

  return (
    <ThemeProvider defaultMode='light' theme={theme} disableTransitionOnChange>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
