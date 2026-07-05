import { FC, useState, ChangeEvent, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
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
import { isEmpty } from '../../utils/index'
import { useStepper } from '@/hooks'

const ApplyInput = styled(InputBase)(({ theme }) => ({
  height: 40,
  border: '1px solid #ECECEC',
  background: '#F1F1F1',
  borderRadius: 8
}))

const ApplyButton = styled(Button)(({ theme }) => ({
  padding: '10px 24px'
}))

const Summary: FC = () => {
  const { itemType, cards, serviceLevel, fee, shippingAddress, shippingMethod, paymentAccount } = useSelector(
    store => store.submission
  )
  const stepper = useStepper()

  const totalValue = cards.reduce((total, item) => total + item.value, 0)

  return (
    <Stack
      direction='column'
      sx={{
        gap: 4,
        minWidth: 400,
        border: '1px solid #D6D6D6',
        borderRadius: 2,
        padding: 6,
        height: 'fit-content'
      }}
    >
      <Typography variant='h5'>Summary</Typography>
      {!isEmpty(itemType) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Item Type
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {itemType}
          </Typography>
        </Stack>
      )}
      {!isEmpty(cards) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Card amount
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {cards.length}
          </Typography>
        </Stack>
      )}
      {!isEmpty(cards) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Total decl. value
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {totalValue}
          </Typography>
        </Stack>
      )}
      {!isEmpty(serviceLevel) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Grading service level
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {serviceLevel}
          </Typography>
        </Stack>
      )}
      {fee !== 0 && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Grading fee
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            ${fee.toFixed(2)}
          </Typography>
        </Stack>
      )}
      {(!isEmpty(shippingAddress) || !isEmpty(shippingMethod) || !isEmpty(paymentAccount)) && <Divider />}
      {(!isEmpty(shippingAddress) || !isEmpty(shippingMethod) || !isEmpty(paymentAccount)) && (
        <Typography variant='subtitle1'>Shipping & Billing</Typography>
      )}
      {!isEmpty(shippingAddress) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Address
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {shippingAddress}
          </Typography>
        </Stack>
      )}
      {!isEmpty(shippingMethod) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Method
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {shippingMethod}
          </Typography>
        </Stack>
      )}
      {!isEmpty(paymentAccount) && (
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' sx={{ color: colors.grey }}>
            Payment account
          </Typography>
          <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
            {paymentAccount}
          </Typography>
        </Stack>
      )}
      {stepper.current >= 4 && (
        <>
          <Divider />
          <Stack direction='row' spacing={2}>
            <ApplyInput fullWidth />
            <ApplyButton variant='contained' size='small'>
              Apply
            </ApplyButton>
          </Stack>
          <Divider />
          <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
            <Typography variant='subtitle2' sx={{ color: colors.grey }}>
              Subtotal
            </Typography>
            <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
              $120.00
            </Typography>
          </Stack>
          <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
            <Typography variant='subtitle2' sx={{ color: colors.grey }}>
              Grading fee
            </Typography>
            <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
              $65.00
            </Typography>
          </Stack>
          <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
            <Typography variant='subtitle2' sx={{ color: colors.grey }}>
              Insured Return Shipping
            </Typography>
            <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
              $19.99
            </Typography>
          </Stack>
          <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
            <Typography variant='subtitle2' sx={{ color: colors.grey }}>
              Handling Charge
            </Typography>
            <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
              $0.00
            </Typography>
          </Stack>
          <Divider />

          <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
            <Typography variant='subtitle2' sx={{ color: colors.grey }}>
              Estimated Total
            </Typography>
            <Typography variant='subtitle2' sx={{ color: '#1D1D1F' }}>
              $219.97
            </Typography>
          </Stack>
        </>
      )}
    </Stack>
  )
}

export default Summary
