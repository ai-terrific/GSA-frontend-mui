import { FC, useState, ChangeEvent } from 'react'
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
import { CARDS, Grading } from '@/constants'
import SummaryPlaceholder from '@/components/Submission/Empty'
import { Delete, DeleteOutlineOutlined, Search } from '@mui/icons-material'
import { colors } from '@/theme'
import NextAndBack from './NextAndBack'
import { CardType } from '@/types'
import { dispatch, selectCards, selectItemType, useSelector } from '@/store'
import Summary from './Summary'

const AddItems: FC = () => {
  const { cards } = useSelector(store => store.submission)

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(selectCards({ cards: CARDS.filter(item => item.title.includes(event.target.value)) }))
  }

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
                onChange={handleFilter}
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
            {cards.map((card, index) => (
              <Stack
                key={`index-${index}`}
                direction='column'
                sx={{ borderRadius: 2, background: '#ECECEC', border: '1px solid #ececec' }}
              >
                <Grid container sx={{ borderRadius: 2, backgroundColor: 'white', padding: 3 }} spacing={2}>
                  <Grid size={5}>
                    <Stack direction='row' sx={{ alignItems: 'center', gap: 2 }}>
                      <Box component='img' src={card.src} alt='table-card-img' height={40} />
                      <Typography variant='subtitle2'>{card.title}</Typography>
                    </Stack>
                  </Grid>
                  <Grid size={4}>
                    <FormControl sx={{ width: '100%' }} size='small'>
                      <Select displayEmpty inputProps={{ 'aria-label': 'Age' }}>
                        <MenuItem>{card.service}</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid size={3}>
                    <Stack direction='row' spacing={2}>
                      <TextField
                        variant='outlined'
                        type='number'
                        size='small'
                        slotProps={{
                          input: {
                            startAdornment: <InputAdornment position='start'>$</InputAdornment>
                          }
                        }}
                        defaultValue={card.value}
                      />
                      <IconButton color='error'>
                        <AppIcon name='trash' />
                      </IconButton>
                    </Stack>
                  </Grid>
                </Grid>
                <Stack direction='row' sx={{ gap: 6, padding: '8px 12px', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 10, fontWeight: 600, color: '#797979' }}>Adv. Options: </Typography>
                  <Stack direction='row' sx={{ gap: 3 }}>
                    <FormControlLabel control={<Checkbox />} label='Encapsulate all if altered' />
                    <FormControlLabel control={<Checkbox />} label='Oversized item' />
                    <FormControlLabel control={<Checkbox />} label='Authentic' />
                  </Stack>
                </Stack>
              </Stack>
            ))}
            <FormControlLabel control={<Checkbox />} label='Encapsulate all if altered' />
            <NextAndBack />
          </Stack>
        </Stack>
        <Summary />
      </Container>
    </Box>
  )
}

export default AddItems
