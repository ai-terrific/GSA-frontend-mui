import React from 'react'
import GradingType from '@/components/Submission/GradingType'
import AddItems from '@/components/Submission/AddItems'
import ServiceLevel from '@/components/Submission/ServiceLevel'
import Shipping from '@/components/Submission/Shipping'
import Billing from '@/components/Submission/Billing'
import Confirmation from '@/components/Submission/Confirmation'

interface StepType {
  title: 'Grading Type' | 'Add Items' | 'Service Level' | 'Shipping' | 'Billing' | 'Confirmation'
  component: React.FC
}

// export const StepData = [
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
