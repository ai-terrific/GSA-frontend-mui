import React from 'react'

import AddItems from '@/components/Submission/AddItems'
import Billing from '@/components/Submission/Billing'
import Confirmation from '@/components/Submission/Confirmation'
import GradingType from '@/components/Submission/GradingType'
import ServiceLevel from '@/components/Submission/ServiceLevel'
import Shipping from '@/components/Submission/Shipping'

type StepTitles = 'Grading Type' | 'Add Items' | 'Service Level' | 'Shipping' | 'Billing' | 'Confirmation'

interface StepType {
  title: StepTitles
  component: React.FC
}

export const StepData: StepType[] = [
  {
    title: 'Grading Type',
    component: GradingType
  },
  {
    title: 'Add Items',
    component: AddItems
  },
  {
    title: 'Service Level',
    component: ServiceLevel
  },
  {
    title: 'Shipping',
    component: Shipping
  },
  {
    title: 'Billing',
    component: Billing
  },
  {
    title: 'Confirmation',
    component: Confirmation
  }
]
