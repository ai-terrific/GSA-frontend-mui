import { ChangeEvent, FC } from 'react'

import { Box, Container, Grid, Radio, RadioGroup, Stack, Typography } from '@mui/material'

import { Service } from '@/constants'
import SummaryPlaceholder from '@/components/Submission/Empty'

import NextAndBack from './NextAndBack'
import { StyledCardLabel } from '../Core/CardLabel'
import Summary from './Summary'
import { dispatch, selectServiceLevel, useSelector } from '@/store'

const ServiceLevel: FC = () => {
  const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    let payload = JSON.parse(event.target.value)
    dispatch(selectServiceLevel({ serviceLevel: payload.title, fee: payload.minCards * payload.price }))
  }

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
            <RadioGroup defaultValue='' onChange={handleUpdate}>
              {Service.map((item, index) => (
                <StyledCardLabel
                  key={`index-${index}`}
                  value={JSON.stringify(item)}
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
        <Summary />
      </Container>
    </Box>
  )
}

export default ServiceLevel
