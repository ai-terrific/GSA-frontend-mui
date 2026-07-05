import { FC } from 'react'

import { Box, Container, Stack, Typography } from '@mui/material'
import SummaryPlaceholder from '@/components/Submission/Empty'
import { useSelector } from '@/store'
import { colors } from '@/theme'
import SelectType from './SelectType'
import Summary from '../Summary'

const GradingType: FC = () => {
  const { itemType } = useSelector(store => store.submission)

  return (
    <Box component='section' sx={{ py: 6 }}>
      <Container sx={{ display: 'flex', gap: '30px' }}>
        <SelectType />
        <Summary />
      </Container>
    </Box>
  )
}

export default GradingType
