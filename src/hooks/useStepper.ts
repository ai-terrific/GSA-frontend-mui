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
    console.log(newStep)
    dispatch(updateStep({ current: newStep }))
  }

  return { current, handleNextStep, handlePreviousStep, handleUpdateStep }
}
