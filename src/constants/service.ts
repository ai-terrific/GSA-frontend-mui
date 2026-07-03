interface ServiceType {
  title: string
  description: string
  minCards: number
  turnaround: string
  price: number
}

export const Service: ServiceType[] = [
  {
    title: 'Economy',
    description: 'Ideal for  Casual collectors or large sets who prefer low-cost grading options.',
    minCards: 25,
    turnaround: '30',
    price: 5
  },
  {
    title: 'Standard',
    description: 'Ideal for Bulk submitters and collectors who want reliable grading at an affordable price.',
    minCards: 10,
    turnaround: '5-10',
    price: 10
  },
  {
    title: 'Express',
    description: 'Ideal for High-value cards, time-sensitive grading, or those who want quick results.',
    minCards: 0,
    turnaround: '1',
    price: 39.99
  }
]
