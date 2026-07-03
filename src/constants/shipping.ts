interface AddressType {
  street: string
  address: string
  phone: string
}

interface MethodType {
  logo: string
  label: string
  price: number
}

interface AccountType {
  label: string
  oversize?: boolean
}

export const shippingAddresses: AddressType[] = [
  {
    street: 'Boiulevard Street 273, CA',
    address: 'California, California, 093823, United States',
    phone: '+1 0921 3812'
  },
  {
    street: 'Street  geroge 23T',
    address: 'California, Sacramentto, 093823, United States',
    phone: '+1 0921 3812'
  }
]

export const shippingMethods: MethodType[] = [
  {
    logo: '/usps.png',
    label: 'USPS Priority Mail',
    price: 19.99
  },
  {
    logo: '/fedex.png',
    label: 'Fedex Ground',
    price: 30
  }
]

export const paymentAccount: AccountType[] = [
  {
    label: 'SGC Shipping & Handling',
    oversize: false
  },
  {
    label: 'Fedex Ground',
    oversize: true
  }
]
