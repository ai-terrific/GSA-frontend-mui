import { useStepper } from '@/hooks'
import { Button, Stack } from '@mui/material'

const NextAndBack = () => {
  const stepper = useStepper()
  return (
    <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
      <Button
        variant='outlined'
        color='inherit'
        sx={{ minWidth: 110, borderColor: '#ECECEC', alignSelf: 'end', display: stepper.current ? 'block' : 'none' }}
        onClick={stepper.handlePreviousStep}
      >
        Back
      </Button>
      <Button
        variant='contained'
        color='error'
        sx={{ minWidth: 110, alignSelf: 'end' }}
        onClick={stepper.handleNextStep}
        disabled={stepper.current === 5}
      >
        Continue
      </Button>
    </Stack>
  )
}

export default NextAndBack
