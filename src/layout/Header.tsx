import { memo, useCallback, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Stack from '@mui/material/Stack'

import { useDialog, useIsLoggedIn, useDeviceType } from '@/hooks'

import ColorModeIcon from '@/components/Core/ColorModeIcon'
import Logo from '@/components/Core/Logo'

import { HeaderContainer } from './components/Container'
import { Box, Container, Link } from '@mui/material'
import { Links } from '@/constants'
import NavLinks from './components/NavLinks'
import { SubmitButton, SignInButton } from '@/components/Core/Button'

// Main Component
const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isLoggedIn = useIsLoggedIn()
  const { openDialog } = useDialog()
  const { isMobile } = useDeviceType()

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search])

  useEffect(() => {
    const type = queryParams.get('type')
    if (!type) return

    switch (type) {
      case 'signup':
        toast.success('Successfully', { hideProgressBar: true })
        break
      case 'reset-password': {
        const token = queryParams.get('token')
        if (token) {
          openDialog('reset-password', token)
        }
        break
      }
    }

    navigate(location.pathname, { replace: true })
  }, [queryParams, openDialog, navigate, location.pathname])

  return (
    <HeaderContainer>
      <Stack direction='row' sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction='row' spacing={12}>
          <Logo />
          <NavLinks />
        </Stack>
        <Stack direction='row' spacing={2}>
          <ColorModeIcon />
          <SubmitButton onClick={() => navigate('/submission')} />
          <SignInButton onClick={() => {}} />
        </Stack>
      </Stack>
    </HeaderContainer>
  )
}

export default memo(Header)
