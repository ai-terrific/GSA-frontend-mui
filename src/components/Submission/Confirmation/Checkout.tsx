import { Divider, IconButton, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import AppIcon from '@/components/Core/AppIcon'
import { StyledPaper } from '@/components/Core/Paper'
import { useStepper } from '@/hooks'
import { colors } from '@/theme'

const Checkout: FC = () => {
  const stepper = useStepper()

  const handleEdit = () => {
    stepper.handleUpdateStep(4)
  }

  return (
    <StyledPaper>
      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h5'>Checkout Summary</Typography>
        <IconButton size='small' onClick={handleEdit}>
          <AppIcon name='edit-square' />
        </IconButton>
      </Stack>

      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <Typography variant='subtitle2' sx={{ color: colors.grey }}>
          Subtotal
        </Typography>
        <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
          $120.00
        </Typography>
      </Stack>
      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <Typography variant='subtitle2' sx={{ color: colors.grey }}>
          Grading fee
        </Typography>
        <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
          $65.00
        </Typography>
      </Stack>
      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <Typography variant='subtitle2' sx={{ color: colors.grey }}>
          Insured Return Shipping
        </Typography>
        <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
          $19.99
        </Typography>
      </Stack>
      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <Typography variant='subtitle2' sx={{ color: colors.grey }}>
          Handling Charge
        </Typography>
        <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
          $0.00
        </Typography>
      </Stack>
      <Divider />

      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <Typography variant='subtitle2' sx={{ color: colors.grey }}>
          Estimated Total
        </Typography>
        <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
          $219.97
        </Typography>
      </Stack>
    </StyledPaper>
  )
}

export default Checkout
