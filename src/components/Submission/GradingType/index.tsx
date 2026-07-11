import { Box, Container } from '@mui/material'
import { FC } from 'react'

import Summary from '../Summary'
import SelectType from './SelectType'

const GradingType: FC = () => {

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
