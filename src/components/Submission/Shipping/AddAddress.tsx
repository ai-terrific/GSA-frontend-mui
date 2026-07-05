import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { useDialog } from '@/hooks'
import { dispatch, login } from '@/store'
import { colors } from '@/theme'
import { handleError } from '@/utils'

import AppIcon from '@/components/Core/AppIcon'

export default function AddAddress() {
  const { openDialog, closeDialog, data } = useDialog()
  const [token, setToken] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleRegister = async () => {
    if (!data) return
    setLoading(true)
    try {
      closeDialog()
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <DialogTitle>
        <Typography component='h4' variant='h4' sx={{ fontSize: 'clamp(1.5rem, 10vw, 2rem)' }}>
          Add new address
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Stack
          sx={theme => ({
            gap: theme.spacing(2),
            maxWidth: 300
          })}
        >
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='error'
            onClick={handleRegister}
            disabled={token.length !== 6}
            loading={loading}
            aria-label='Submit'
          >
            Save address
          </Button>
        </Stack>
      </DialogContent>
    </>
  )
}
