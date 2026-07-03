import { dispatch, updateStep, useSelector } from '@/store'

export function useStepper() {
  const { current } = useSelector(store => store.step)

  const handleNextStep = () => {
    dispatch(updateStep({ current: current + 1 }))
  }

  const handlePreviousStep = () => {
    dispatch(updateStep({ current: current - 1 }))
  }

  return { current, handleNextStep, handlePreviousStep }
}
