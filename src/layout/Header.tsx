
import Stack from '@mui/material/Stack'
import { memo, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { SignInButton, SubmitButton } from '@/components/Core/Button'
import ColorModeIcon from '@/components/Core/ColorModeIcon'
import Logo from '@/components/Core/Logo'
import { useDialog } from '@/hooks'

import { HeaderContainer } from './components/Container'
import NavLinks from './components/NavLinks'

// Main Component
const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { openDialog } = useDialog()

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search])

  useEffect(() => {
    const type = queryParams.get('type')
    if (!type) return

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
