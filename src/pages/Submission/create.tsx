import { FC } from 'react'
import {
  colors,
  Container,
  Stack,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepIcon,
  StepButton,
  Box,
  Typography,
  Button,
  useTheme
} from '@mui/material'
import { StepData } from '@/constants'
import { useStepper } from '@/hooks'

const CreateSubmission: FC = () => {
  const stepper = useStepper()
  const theme = useTheme()
  const CurrentStep = StepData[stepper['current']].component

  return (
    <Stack sx={{ background: colors.grey }}>
      <Stack
        direction='row'
        sx={{ justifyContent: 'space-between', width: '100%', background: 'white', border: '1px solid #ECECEC' }}
      >
        <Container sx={{ display: 'flex', justifyContent: 'space-between', py: 5 }}>
          <Stepper activeStep={stepper.current} connector={<StepConnector sx={{ width: 30 }} />}>
            {StepData.map((step, index) => (
              <Step key={step.title}>
                <StepButton
                  sx={{ border: '1px solid #797979', borderRadius: 1000, padding: 1, width: 'fit-content' }}
                  icon={
                    <Box
                      sx={theme => ({
                        width: '18px',
                        height: '18px',
                        borderRadius: '1000px',
                        backgroundColor: '#f1f1f1',
                        fontSize: '12px',
                        color: '#797979',
                        fontWeight: 700
                      })}
                    >
                      {index + 1}
                    </Box>
                  }
                >
                  {step.title}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <Stack direction='row' sx={{ gap: 4, alignItems: 'center' }}>
            <Typography variant='body2'>Auto-saved</Typography>
            <Button variant='contained' color='inherit' onClick={stepper.handleNextStep}>
              Save & Exit
            </Button>
          </Stack>
        </Container>
      </Stack>
      <CurrentStep />
    </Stack>
  )
}

export default CreateSubmission
