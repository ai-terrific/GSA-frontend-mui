import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Submission } from '@/types'
import { CARDS } from '@/constants'

const initialState: Submission = {
  itemType: '',
  cards: CARDS,
  serviceLevel: '',
  fee: 0,
  shippingAddress: '',
  shippingMethod: '',
  paymentAccount: '',
  payment: {
    cardNumber: '',
    expiry: 0,
    security: '',
    country: ''
  }
}

const submissionSlice = createSlice({
  name: 'submission',
  initialState,
  reducers: {
    selectItemType(state, action: PayloadAction<{ itemType: Submission['itemType'] }>) {
      state.itemType = action.payload.itemType
    },
    selectCards(state, action: PayloadAction<{ cards: Submission['cards'] }>) {
      state.cards = action.payload.cards
    },
    selectServiceLevel(
      state,
      action: PayloadAction<{ serviceLevel: Submission['serviceLevel']; fee: Submission['fee'] }>
    ) {
      state.serviceLevel = action.payload.serviceLevel
      state.fee = action.payload.fee
    },
    setShipping(
      state,
      action: PayloadAction<{
        shippingAddress?: Submission['shippingAddress']
        shippingMethod?: Submission['shippingMethod']
        paymentAccount?: Submission['paymentAccount']
      }>
    ) {
      if (action.payload.shippingAddress) state.shippingAddress = action.payload.shippingAddress
      if (action.payload.shippingMethod) state.shippingMethod = action.payload.shippingMethod!
      if (action.payload.paymentAccount) state.paymentAccount = action.payload.paymentAccount!
    },
    setPayment(
      state,
      action: PayloadAction<{
        cardNumber?: Submission['payment']['cardNumber']
        expiry?: Submission['payment']['expiry']
        security?: Submission['payment']['security']
        country?: Submission['payment']['country']
      }>
    ) {
      if (action.payload.cardNumber) state.payment.cardNumber = action.payload.cardNumber
      if (action.payload.expiry) state.payment.expiry = action.payload.expiry
      if (action.payload.security) state.payment.security = action.payload.security
      if (action.payload.country) state.payment.country = action.payload.country
    }
  }
})

export default submissionSlice.reducer

export const { selectItemType, selectCards, selectServiceLevel, setShipping, setPayment } = submissionSlice.actions
