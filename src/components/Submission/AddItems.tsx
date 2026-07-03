import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
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
import { Delete, DeleteOutlineOutlined, Search } from '@mui/icons-material'
import { colors } from '@/theme'
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

const AddItems: FC = () => {
  return (
    <Box component='section' sx={{ py: 6 }}>
      <Container sx={{ display: 'flex', gap: '30px' }}>
        <Stack direction='column' sx={{ width: '100%', gap: 8 }}>
          <Typography variant='h3'>Create Submission</Typography>
          <Stack direction='column' sx={{ gap: 6 }}>
            <Stack direction='column' sx={{ gap: 2 }}>
              <Typography variant='h5'>Add Your Items</Typography>
              <Typography variant='subtitle2' color='secondary'>
                Add items you want to submit to GSA for grading
              </Typography>
            </Stack>
            <Stack direction='column' sx={{ gap: 2 }}>
              <TextField
                variant='outlined'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Search />
                      </InputAdornment>
                    )
                  }
                }}
                placeholder='Search for cards'
              />
              <Typography variant='caption' color='secondary'>
                Start with the player name and card number. Then add any inserts and/or parallels, if applicable. It
                doesn't matter if your card doesn't show up in the search results. Simply enter the year, manufacturer,
                card number, player name, insert and/or parallel to your ability. Then select the "Click Here To Add
                Your Card" link below. Please note, during processing, SGC will correct any inaccuracies so that all
                cards are labeled correctly.
              </Typography>
              <Link href='/'>
                <Typography variant='caption' sx={{ color: 'red', fontWeight: 500 }}>
                  Show Pricing Table
                </Typography>
              </Link>
            </Stack>
            <Grid container sx={{ borderRadius: 1000, padding: '4px 12px', background: '#ECECEC' }} spacing={2}>
              <Grid size={5}>Items</Grid>
              <Grid size={4}>Card Service</Grid>
              <Grid size={3}>Decl. Value</Grid>
            </Grid>
            <Stack direction='column' sx={{ borderRadius: 2, background: '#ECECEC' }}>
              <Grid container sx={{ borderRadius: 2, backgroundColor: 'white', padding: 3 }} spacing={2}>
                <Grid size={5} direction='row'>
                  <Stack direction='row' sx={{ alignItems: 'center', gap: 2 }}>
                    <Box component='img' src='/slider4.png' alt='table-card-img' height={40} />
                    <Typography variant='subtitle2'>1952 Topps 275 Pat Mullin</Typography>
                  </Stack>
                </Grid>
                <Grid size={4}>
                  <FormControl sx={{ width: '100%' }}>
                    <Select
                      // value={age}
                      // onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Age' }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={3}>
                  <Stack direction='row' spacing={2}>
                    <TextField
                      variant='outlined'
                      type='number'
                      slotProps={{
                        input: {
                          startAdornment: <InputAdornment position='start'>$</InputAdornment>
                        }
                      }}
                      placeholder='0'
                    />
                    <IconButton color='error'>
                      <AppIcon name='trash' />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
              <Stack direction='row' sx={{ gap: 6, padding: '8px 12px', alignItems: 'center' }}>
                <Typography sx={{ fontSize: 10, fontWeight: 600, color: '#797979' }}>Adv. Options: </Typography>
                <Stack direction='row' sx={{ gap: 4 }}>
                  <FormControlLabel control={<Checkbox />} label='Encapsulate all if altered' />
                  <FormControlLabel control={<Checkbox />} label='Oversized item' />
                  <FormControlLabel control={<Checkbox />} label='Authentic' />
                </Stack>
              </Stack>
            </Stack>
            <FormControlLabel control={<Checkbox />} label='Encapsulate all if altered' />
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
          <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
            <Typography variant='subtitle2' sx={{ color: colors.grey }}>
              Item Type
            </Typography>
            <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
              Standard Card Grading
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default AddItems
