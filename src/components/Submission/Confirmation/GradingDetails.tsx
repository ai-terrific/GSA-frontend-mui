import { FC } from 'react'

import { IconButton, Paper, Stack, Typography } from '@mui/material'
import AppIcon from '@/components/Core/AppIcon'
import { colors } from '@/theme'
import { useSelector } from '@/store'
import { isEmpty } from '@/utils'
import { StyledPaper } from '@/components/Core/Paper'
import { useStepper } from '@/hooks'

const GradingDetails: FC = () => {
  const stepper = useStepper()
  const { itemType, cards, serviceLevel, fee } = useSelector(store => store.submission)
  const totalValue = cards.reduce((total, item) => total + item.value, 0)

  const handleEdit = () => {
    stepper.handleUpdateStep(0)
  }

  return (
    <StyledPaper>
      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h5'>Grading details</Typography>
        <IconButton size='small' onClick={handleEdit}>
          <AppIcon name='edit-square' />
        </IconButton>
      </Stack>
      {!isEmpty(itemType) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Item Type
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {itemType}
          </Typography>
        </Stack>
      )}
      {!isEmpty(cards) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Card amount
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {cards.length}
          </Typography>
        </Stack>
      )}
      {!isEmpty(cards) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Total decl. value
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {totalValue}
          </Typography>
        </Stack>
      )}
      {!isEmpty(serviceLevel) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Grading service level
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {serviceLevel}
          </Typography>
        </Stack>
      )}
      {fee !== 0 && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Grading fee
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            ${fee.toFixed(2)}
          </Typography>
        </Stack>
      )}
    </StyledPaper>
  )
}

export default GradingDetails
