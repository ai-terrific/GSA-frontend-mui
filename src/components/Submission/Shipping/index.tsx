import { Box, Button, Container, Divider, Grid, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { ChangeEvent, FC } from 'react'

import AppIcon from '@/components/Core/AppIcon'
import { StyledCardLabel } from '@/components/Core/CardLabel'
import { paymentAccount, shippingAddresses, shippingMethods } from '@/constants'
import { useDialog, useStepper } from '@/hooks'
import { dispatch, setShipping } from '@/store'

import Summary from '../Summary'

const Shipping: FC = () => {
  const stepper = useStepper()
  const { openDialog } = useDialog()

  const setShippingAddress = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setShipping({ shippingAddress: event.target.value }))
  }

  const setShippingMethod = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setShipping({ shippingMethod: event.target.value }))
  }

  const setPaymentAccount = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setShipping({ paymentAccount: event.target.value }))
  }

  return (
    <Box component='section' sx={{ py: 6 }}>
      <Container sx={{ display: 'flex', gap: '30px' }}>
        <Stack direction='column' sx={{ width: '100%', gap: 8 }}>
          <Typography variant='h3'>Create Submission</Typography>
          <Stack direction='column' sx={{ gap: 6 }}>
            <Stack direction='column' sx={{ gap: 2 }}>
              <Typography variant='h5'>Return Shipping</Typography>
              <Typography variant='subtitle2' color='secondary'>
                Complete your submission by providing shipment
              </Typography>
            </Stack>
            <Stack sx={{ gap: 4 }}>
              <Typography variant='subtitle1'>Select Shipping address</Typography>
              <RadioGroup defaultValue='' onChange={setShippingAddress}>
                {shippingAddresses.map((item,) => (
                  <StyledCardLabel
                    value={item.street}
                    labelPlacement='start'
                    control={<Radio color='error' />}
                    label={
                      <Stack direction='column' sx={{ gap: 0.5 }}>
                        <Typography variant='body1' sx={{ fontWeight: 600 }}>
                          {item.street}
                        </Typography>
                        <Typography variant='caption'>{item.address}</Typography>
                      </Stack>
                    }
                  />
                ))}
              </RadioGroup>
              <Button
                variant='contained'
                color='inherit'
                fullWidth
                startIcon={<AppIcon name='add' />}
                onClick={() => openDialog('address')}
              >
                Add new shipping address
              </Button>
            </Stack>
            <Divider />
            <Stack sx={{ gap: 4 }}>
              <Typography variant='subtitle1'>Select shipping method</Typography>
              <RadioGroup defaultValue='' onChange={setShippingMethod}>
                <Grid container spacing={2}>
                  {shippingMethods.map((item,) => (
                    <Grid size={6}>
                      <StyledCardLabel
                        value={item.label}
                        sx={{ height: '100%' }}
                        labelPlacement='start'
                        control={<Radio color='error' />}
                        label={
                          <Stack direction='column' sx={{ gap: 4 }}>
                            <Box component='img' src={item.logo} height={32} width={46} />
                            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                              <Typography variant='body1' sx={{ fontWeight: 600 }}>
                                {item.label}(Oversized)
                              </Typography>
                              <Typography variant='caption'>${item.price}</Typography>
                            </Stack>
                          </Stack>
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            </Stack>
            <Divider />
            <Stack sx={{ gap: 4 }}>
              <Typography variant='subtitle1'>Select shipping payment account</Typography>
              <RadioGroup defaultValue='' onChange={setPaymentAccount}>
                {paymentAccount.map((item,) => (
                  <StyledCardLabel
                    value={item.label}
                    labelPlacement='start'
                    control={<Radio color='error' />}
                    label={
                      <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='body1' sx={{ fontWeight: 600 }}>
                          {item.label}
                        </Typography>
                        {item.oversize && (
                          <TextField size='small' variant='outlined' placeholder='Input account number' type='number' />
                        )}
                      </Stack>
                    }
                  />
                ))}
              </RadioGroup>
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
              <Button
                variant='contained'
                color='error'
                sx={{ minWidth: 110, alignSelf: 'end' }}
                onClick={stepper.handleNextStep}
              >
                Proceed to Checkout
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Summary />
      </Container>
    </Box>
  )
}

export default Shipping
