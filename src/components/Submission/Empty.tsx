import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'

const SummaryPlaceholder: FC = () => {
  return (
    <Stack direction='column' sx={{ gap: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Box component='img' src='/summary.svg' />
      <Typography variant='subtitle2' color='secondary'>
        Order summary will shown here
      </Typography>
    </Stack>
  )
}

export default SummaryPlaceholder
