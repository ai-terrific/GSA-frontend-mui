import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import { useStepper } from '@/hooks'

import Checkout from './Checkout'
import GradingDetails from './GradingDetails'
import ItemList from './Items'
import ShippingAndBilling from './ShippingAndBilling'

const Confirmation: FC = () => {
  const stepper = useStepper()
  
return (
    <Box component='section' sx={{ py: 6 }}>
      <Container>
        <Stack sx={{ gap: 6 }}>
          <Typography variant='h3' sx={{ textAlign: 'center' }}>
            Review Order
          </Typography>
          <Stack direction='row' sx={{ width: '100%', gap: 6 }}>
            <ItemList />
            <Stack
              direction='column'
              sx={{
                gap: 4,
                minWidth: 400
              }}
            >
              <GradingDetails />
              <ShippingAndBilling />
              <Checkout />
            </Stack>
          </Stack>
          <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
            <Button
              variant='outlined'
              color='inherit'
              sx={{
                minWidth: 110,
                borderColor: '#ECECEC',
                alignSelf: 'end',
                display: stepper.current ? 'block' : 'none'
              }}
              onClick={stepper.handlePreviousStep}
            >
              Back
            </Button>
            <Button variant='contained' color='error' sx={{ minWidth: 110, alignSelf: 'end' }}>
              Review Order
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Confirmation
