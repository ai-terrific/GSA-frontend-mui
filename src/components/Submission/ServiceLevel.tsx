import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  styled,
  Typography
} from '@mui/material'
import AppIcon from '@/components/Core/AppIcon'
import EmptySubmission from '@/components/Submission/Empty'
import { Grading, Service } from '@/constants'
import SummaryPlaceholder from '@/components/Submission/Empty'
import NextAndBack from './NextAndBack'

const StyledCardLabel = styled(FormControlLabel)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '8px',
  padding: '10px 16px',
  margin: '8px 0',
  transition: 'all 0.2s ease-in-out',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  // Style based on internal check state
  '&:has(span.Mui-checked)': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light + '20' // transparent fill
  }
}))

const ServiceLevel: FC = () => {
  return (
    <Box component='section' sx={{ py: 6 }}>
      <Container sx={{ display: 'flex', gap: '30px' }}>
        <Stack direction='column' sx={{ width: '100%', gap: 8 }}>
          <Typography variant='h3'>Create Submission</Typography>
          <Stack direction='column' sx={{ gap: 6 }}>
            <Stack direction='column' sx={{ gap: 2 }}>
              <Typography variant='h5'>Select Service Program</Typography>
              <Typography variant='subtitle2' color='secondary'>
                Select the service you want to take
              </Typography>
            </Stack>
            <Grid
              container
              sx={{ borderRadius: 1000, padding: '4px 12px 4px 48px', background: '#ECECEC', alignItems: 'center' }}
              spacing={2}
            >
              <Grid size={6}>Service Level</Grid>
              <Grid size={2}>Min cards/sub</Grid>
              <Grid size={2}>Turnaround</Grid>
              <Grid size={2}>Price</Grid>
            </Grid>
            <RadioGroup defaultValue={0}>
              {Service.map((item, index) => (
                <StyledCardLabel
                  value={index}
                  labelPlacement='end'
                  control={<Radio />}
                  label={
                    <Grid container sx={{ width: '100%', alignItems: 'center' }} spacing={2}>
                      <Grid size={6}>
                        <Stack sx={{ gap: 0.5 }}>
                          <Typography variant='subtitle2'>{item.title}</Typography>
                          <Typography variant='caption' color='secondary'>
                            {item.description}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid size={2}>{item.minCards > 0 ? `${item.minCards} cards` : 'No minimum'}</Grid>
                      <Grid size={2}>{item.minCards > 1 ? `${item.minCards} Businesses` : `1 Business`}</Grid>
                      <Grid size={2}>{`$${item.price}`}</Grid>
                    </Grid>
                  }
                />
              ))}
            </RadioGroup>
            <NextAndBack />
          </Stack>
        </Stack>
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
          <SummaryPlaceholder />
        </Stack>
      </Container>
    </Box>
  )
}

export default ServiceLevel
