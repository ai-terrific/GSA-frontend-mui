import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
  styled,
  TextField,
  Typography
} from '@mui/material'
import AppIcon from '@/components/Core/AppIcon'
import EmptySubmission from '@/components/Submission/Empty'
import { Grading } from '@/constants'
import SummaryPlaceholder from '@/components/Submission/Empty'
import NextAndBack from './NextAndBack'
import { Visibility } from '@mui/icons-material'
import { useStepper } from '@/hooks'

const Billing: FC = () => {
  const stepper = useStepper()
  return (
    <Box component='section' sx={{ py: 6 }}>
      <Container sx={{ display: 'flex', gap: '30px' }}>
        <Stack direction='column' sx={{ width: '100%', gap: 8 }}>
          <Typography variant='h3'>Create Submission</Typography>
          <Stack direction='column' sx={{ gap: 6 }}>
            <Stack direction='column' sx={{ gap: 1 }}>
              <Typography variant='h5'>Payment Method</Typography>
              <Typography variant='subtitle2' color='secondary'>
                To pay with a credit or debit card, fill in your credit card number, expiration, CVC, country and
                zip/postal code. When complete, a PAY NOW button will appear beneath your payment method.
                <br />
                <br /> Alternatively, you may checkout with a 3rd party Wallet like Apple Pay or Google Pay, if given
                the option.
                <br />
                <br /> If you want to retain your credit or debit card information so future checkouts are easier, click
                the Save Card Details checkbox under the Country dropdown.
              </Typography>
            </Stack>
            <Grid container spacing={2}>
              <Grid size={12}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor='card-number'>Card Number</InputLabel>
                  <OutlinedInput
                    id='card-number'
                    endAdornment={
                      <InputAdornment position='end'>
                        <Box component='img' src='/cards.png' />
                      </InputAdornment>
                    }
                    label='Card Number'
                  />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor='expiry'>Expiry</InputLabel>
                  <OutlinedInput id='expiry' type='number' label='Expiry' />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor='security-code'>Security Code</InputLabel>
                  <OutlinedInput id='security-code' type='password' label='Security Code' />
                </FormControl>
              </Grid>
              <Grid size={12}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel htmlFor='country'>Country</InputLabel>
                  <Select
                    // value={age}
                    // onChange={handleChange}
                    id='country'
                    label='Country'
                    displayEmpty
                    inputProps={{ 'aria-label': 'Age' }}
                  >
                    <MenuItem value={1}>United States</MenuItem>
                    <MenuItem value={2}>Canada</MenuItem>
                    <MenuItem value={3}>Poland</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <FormControlLabel control={<Checkbox />} label='Save payment method' />

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
                Review Order
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

export default Billing
