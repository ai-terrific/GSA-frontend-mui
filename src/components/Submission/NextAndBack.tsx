import { useStepper } from '@/hooks'
import { Button, Stack } from '@mui/material'

const NextAndBack = ({ nextDisabled }: { nextDisabled?: boolean }) => {
  const stepper = useStepper()

  return (
    <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
      <Button
        variant='outlined'
        color='inherit'
        sx={{
          minWidth: 110,
          borderColor: '#ECECEC',
          alignSelf: 'end',
          visibility: stepper.current ? 'show' : 'hidden'
        }}
        onClick={stepper.handlePreviousStep}
      >
        Back
      </Button>
      <Button
        variant='contained'
        color='error'
        sx={{ minWidth: 110, alignSelf: 'end' }}
        onClick={stepper.handleNextStep}
        disabled={nextDisabled}
      >
        Continue
      </Button>
    </Stack>
  )
}

export default NextAndBack
