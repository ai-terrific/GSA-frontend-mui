import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Button,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  styled,
  TextField,
  Typography
} from '@mui/material'
import AppIcon from '@/components/Core/AppIcon'
import EmptySubmission from '@/components/Submission/Empty'
import { Grading, paymentAccount, shippingAddresses, shippingMethods } from '@/constants'
import SummaryPlaceholder from '@/components/Submission/Empty'
import NextAndBack from './NextAndBack'
import { spacing } from '../../theme/themePrimitives'
import { useStepper } from '@/hooks'

const StyledCardLabel = styled(FormControlLabel)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '8px',
  padding: '10px 16px',
  margin: '8px 0',
  transition: 'all 0.2s ease-in-out',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  // Style based on internal check state
  '&:has(span.Mui-checked)': {
    borderColor: theme.palette.error.light,
    backgroundColor: theme.palette.error.light, // transparent fill
    color: theme.palette.error.main
  }
}))

const Shipping: FC = () => {
  const stepper = useStepper()
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
              <RadioGroup defaultValue={0}>
                {shippingAddresses.map((item, index) => (
                  <StyledCardLabel
                    value={index}
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
              <Button variant='contained' color='inherit' fullWidth startIcon={<AppIcon name='add' />}>
                Add new shipping address
              </Button>
            </Stack>
            <Divider />
            <Stack sx={{ gap: 4 }}>
              <Typography variant='subtitle1'>Select shipping method</Typography>
              <RadioGroup defaultValue={0}>
                <Grid container spacing={2}>
                  {shippingMethods.map((item, index) => (
                    <Grid size={6}>
                      <StyledCardLabel
                        value={index}
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
              <RadioGroup defaultValue={0}>
                {paymentAccount.map((item, index) => (
                  <StyledCardLabel
                    value={index}
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

export default Shipping
