import { styled } from '@mui/material/styles'

import { colors } from '@/theme'

export const HeaderContainer = styled('header')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  zIndex: 100,
  transition: 'background 0.3s ease-in-out, right 0.3s ease-in-out, width 0.3s ease-in-out',
  background: colors.white,
  borderBottom: `1px solid ${colors.border}`,
  width: '100%',
  padding: '16px 150px',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%'
  },

  [theme.breakpoints.up('md')]: {
    marginInline: 'auto'
  },

  ...theme.applyStyles('dark', {
    background: colors.bgDark,
    borderBottom: `1px solid ${colors.borderDark}`
  })
}))

export const FooterContainer = styled('footer')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  zIndex: 100,
  transition: 'background 0.3s ease-in-out, right 0.3s ease-in-out, width 0.3s ease-in-out',
  background: colors.white,
  borderBottom: `1px solid ${colors.border}`,
  color: colors.grey,
  width: '100%',
  padding: '16px 150px',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%'
  },

  [theme.breakpoints.up('md')]: {
    marginInline: 'auto'
  },

  ...theme.applyStyles('dark', {
    background: colors.bgDark,
    borderBottom: `1px solid ${colors.borderDark}`
  })
}))

export const Main = styled('main')(({ }) => ({
  minHeight: 'calc(100vh - 127px)'
}))
