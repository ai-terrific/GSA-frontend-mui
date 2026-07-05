import { FC } from 'react'

import { IconButton, Stack, Typography } from '@mui/material'
import AppIcon from '@/components/Core/AppIcon'
import { colors } from '@/theme'
import { useSelector } from '@/store'
import { isEmpty } from '@/utils'
import { useStepper } from '@/hooks'
import { StyledPaper } from '@/components/Core/Paper'

const ShippingAndBilling: FC = () => {
  const { shippingAddress, shippingMethod, paymentAccount } = useSelector(store => store.submission)
  const stepper = useStepper()

  const handleEdit = () => {
    stepper.handleUpdateStep(3)
  }

  return (
    <StyledPaper>
      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h5'>Shipping & Billing</Typography>
        <IconButton size='small' onClick={handleEdit}>
          <AppIcon name='edit-square' />
        </IconButton>
      </Stack>
      {!isEmpty(shippingAddress) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Address
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {shippingAddress}
          </Typography>
        </Stack>
      )}
      {!isEmpty(shippingMethod) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Method
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {shippingMethod}
          </Typography>
        </Stack>
      )}
      {!isEmpty(paymentAccount) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Payment account
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {paymentAccount}
          </Typography>
        </Stack>
      )}
    </StyledPaper>
  )
}

export default ShippingAndBilling
