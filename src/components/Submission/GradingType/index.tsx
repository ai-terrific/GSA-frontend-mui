import { FC } from 'react'

import { Box, Container, Stack, Typography } from '@mui/material'
import SummaryPlaceholder from '@/components/Submission/Empty'
import { useSelector } from '@/store'
import { colors } from '@/theme'
import SelectType from './SelectType'

const GradingType: FC = () => {
  const { itemType } = useSelector(store => store.submission)

  return (
    <Box component='section' sx={{ py: 6 }}>
      <Container sx={{ display: 'flex', gap: '30px' }}>
        <SelectType />
        <Stack
          direction='column'
          sx={{
            gap: 4,
            width: 400,
            border: '1px solid #D6D6D6',
            borderRadius: 2,
            padding: 6,
            height: 'fit-content'
          }}
        >
          <Typography variant='h5'>Summary</Typography>
          {itemType ? (
            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
              <Typography variant='subtitle2' color='primary'>
                Item Type
              </Typography>
              <Typography variant='subtitle2' sx={{ color: colors.grey }}>
                {itemType}
              </Typography>
            </Stack>
          ) : (
            <SummaryPlaceholder />
          )}
        </Stack>
      </Container>
    </Box>
  )
}

export default GradingType
