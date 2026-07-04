import { ChangeEvent, FC } from 'react'

import { Box, Container, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import AppIcon from '@/components/Core/AppIcon'
import SummaryPlaceholder from '@/components/Submission/Empty'
import { Grading } from '@/constants'
import { dispatch, useSelector, selectItemType } from '@/store'
import { colors } from '@/theme'
import { isEmpty } from '@/utils'

import NextAndBack from '../NextAndBack'
import { StyledCardLabel } from '../../Core/CardLabel'

const SelectType: FC = () => {
  const { itemType } = useSelector(store => store.submission)

  const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(selectItemType({ itemType: event.target.value }))
  }

  return (
    <Stack direction='column' sx={{ width: '100%', gap: 8 }}>
      <Typography variant='h3'>Create Submission</Typography>
      <Stack direction='column' sx={{ gap: 6 }}>
        <Stack direction='column' sx={{ gap: 2 }}>
          <Typography variant='h5'>Select Item Type</Typography>
          <Typography variant='subtitle2' color='secondary'>
            Select the item type that you are submitting to order
          </Typography>
        </Stack>
        <RadioGroup defaultValue='' onChange={handleUpdate}>
          {Grading.map((item, index) => (
            <StyledCardLabel
              value={item.title}
              key={`index-${index}`}
              labelPlacement='start'
              control={<Radio />}
              label={
                <Stack direction='row' sx={{ gap: 2, alignItems: 'center' }}>
                  <Box sx={{ width: 36, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
        <NextAndBack nextDisabled={isEmpty(itemType)} />
      </Stack>
    </Stack>
  )
}

export default SelectType
