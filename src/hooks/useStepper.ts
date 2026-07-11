import { useMemo } from 'react'

import { dispatch, updateStep, useSelector } from '@/store'

export function useStepper() {
  const { current } = useSelector(store => store.step)

  const handleNextStep = () => {
    dispatch(updateStep({ current: current + 1 }))
  }

  const handlePreviousStep = () => {
    dispatch(updateStep({ current: current - 1 }))
  }

  const handleUpdateStep = (newStep: number) => {
    dispatch(updateStep({ current: newStep }))
  }

  return useMemo(
    () => ({
      current,
      handleNextStep,
      handlePreviousStep,
      handleUpdateStep
    }),
    [current, handleNextStep, handlePreviousStep, handleUpdateStep]
  )
}
