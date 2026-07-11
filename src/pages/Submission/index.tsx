import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import AppIcon from '@/components/Core/AppIcon'
import EmptySubmission from '@/components/Submission/Empty'

const Submission: FC = () => {
  const navigate = useNavigate()

  return (
    <Box component='section' sx={{ py: 12.5 }}>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Stack sx={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='h3'>My Submission</Typography>
          <Button
            variant='contained'
            color='error'
            startIcon={<AppIcon name='add' size={16} />}
            onClick={() => navigate('/submission/create')}
          >
            Create New Submission
          </Button>
        </Stack>
        <Grid container spacing={12.5} sx={{ width: '100%' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction='column' sx={{ gap: 4 }}>
              <Stack direction='column' sx={{ gap: 2 }}>
                <Typography variant='h5'>Recent</Typography>
                <Typography variant='subtitle2' color='secondary'>
                  Submissions that you recently completed
                </Typography>
              </Stack>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: 500,
                  border: '1px solid #D6D6D6',
                  borderRadius: 2,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <EmptySubmission />
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction='column' sx={{ gap: 4 }}>
              <Stack direction='column' sx={{ gap: 2 }}>
                <Typography variant='h5'>In Progress</Typography>
                <Typography variant='subtitle2' color='secondary'>
                  Submissions that are incomplete
                </Typography>
              </Stack>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: 500,
                  border: '1px solid #D6D6D6',
                  borderRadius: 2,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <EmptySubmission />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Submission
