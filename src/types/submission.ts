export interface Submission {
  itemType: string
  cards: CardType[] | []
  serviceLevel: string
  fee: number
  shippingAddress: string
  shippingMethod: string
  paymentAccount: string
  payment: {
    cardNumber: string
    expiry: number
    security: string
    country: string
  }
}

export interface CardType {
  title: string
  src: string
  value: number
  service: string
}

export interface ListType {
  list: Submission[] | []
}
