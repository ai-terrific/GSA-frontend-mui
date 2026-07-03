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
import { Grading } from '@/constants'
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

const GradingType: FC = () => {
  return (
    <Box component='section' sx={{ py: 6 }}>
      <Container sx={{ display: 'flex', gap: '30px' }}>
        <Stack direction='column' sx={{ width: '100%', gap: 8 }}>
          <Typography variant='h3'>Create Submission</Typography>
          <Stack direction='column' sx={{ gap: 6 }}>
            <Stack direction='column' sx={{ gap: 2 }}>
              <Typography variant='h5'>Select Item Type</Typography>
              <Typography variant='subtitle2' color='secondary'>
                Select the item type that you are submitting to order
              </Typography>
            </Stack>
            <RadioGroup defaultValue={0}>
              {Grading.map((item, index) => (
                <StyledCardLabel
                  value={index}
                  labelPlacement='start'
                  control={<Radio />}
                  label={
                    <Stack direction='row' sx={{ gap: 2, alignItems: 'center' }}>
                      <Box
                        sx={{ width: 36, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                      >
                        <AppIcon name={item.icon} />
                      </Box>
                      <Stack direction='column' sx={{ gap: 0.5 }}>
                        <Typography variant='body1' sx={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                        <Typography variant='caption'>{item.description}</Typography>
                      </Stack>
                    </Stack>
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

export default GradingType
