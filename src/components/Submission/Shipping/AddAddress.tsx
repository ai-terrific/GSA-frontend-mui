
import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useDialog } from '@/hooks'
import { handleError } from '@/utils'

export default function AddAddress() {
  const { closeDialog, data } = useDialog()
  const [token,] = useState<string>('')
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
