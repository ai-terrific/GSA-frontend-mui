import { FC } from 'react'

import { Box, Checkbox, Divider, FormControlLabel, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import AppIcon from '@/components/Core/AppIcon'
import { useStepper } from '@/hooks'
import { useSelector } from '@/store'

const ItemList: FC = () => {
  const stepper = useStepper()
  const { cards } = useSelector(store => store.submission)

  const handleEdit = () => {
    stepper.handleUpdateStep(1)
  }

  return (
    <Paper sx={{ flex: 1, border: '1px solid #ECECEC' }}>
      <Stack sx={{ padding: 4, gap: 4 }}>
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h5'>Items ({cards.length})</Typography>
          <IconButton size='small' onClick={handleEdit}>
            <AppIcon name='edit-square' />
          </IconButton>
        </Stack>
        <Grid container spacing={2}>
          <Grid size={7}>
            <Typography variant='caption'>Items</Typography>
          </Grid>
          <Grid size={3}>
            <Typography variant='caption'>Card Service</Typography>
          </Grid>
          <Grid size={2}>
            <Typography variant='caption'>Decl. Value</Typography>
          </Grid>
        </Grid>
        {cards.length > 0 &&
          cards.map((item, index) => (
            <>
              <Divider />
              <Grid container spacing={2}>
                <Grid size={7}>
                  <Stack direction='row' spacing={2}>
                    <Box component={'img'} src={item.src} height={40} alt={item.title} />
                    <Stack sx={{ gap: 0.5 }}>
                      <Typography>{item.title}</Typography>
                      <Typography variant='caption' sx={{ fontSize: 10 }}>
                        Encapsulate
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>{item.service}</Typography>
                </Grid>
                <Grid size={2} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>${item.value}</Typography>
                </Grid>
              </Grid>
            </>
          ))}
      </Stack>
    </Paper>
  )
}

export default ItemList
