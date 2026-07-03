import { memo } from 'react'
import { Button, IconButton, ButtonProps, styled } from '@mui/material'
import { red } from '@/theme'
import AppIcon from '@/components/Core/AppIcon'

export const DetailButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[400]),
  backgroundColor: red[300],
  padding: '12px 24px',
  gap: 16,
  fontSize: 18,
  fontFamily: 'Inter',
  '&:hover': {
    backgroundColor: red[400]
  }
}))

export const SubmitButton = memo(({ onClick }: { onClick: () => void }) => (
  <Button
    variant='contained'
    color='inherit'
    onClick={onClick}
    aria-label='Login'
    startIcon={<AppIcon name='upload' size={16} />}
  >
    Submit
  </Button>
))
SubmitButton.displayName = 'SubmitButton'

export const SignInButton = memo(({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick} aria-label='Login' sx={{ width: 40, height: 40 }}>
    <AppIcon name='user' size={16} />
  </IconButton>
))
SignInButton.displayName = 'SignInButton'
