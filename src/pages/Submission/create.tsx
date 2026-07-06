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
                  sx={{
                    border: stepper.current === index ? '1px solid #262628 !important' : '1px solid #F1F1F1',
                    borderRadius: 1000,
                    padding: 1,
                    width: 'fit-content'
                  }}
                  onClick={() => stepper.handleUpdateStep(index)}
                  icon={
                    <Box
                      sx={theme => ({
                        width: '18px',
                        height: '18px',
                        borderRadius: '1000px',
                        backgroundColor: stepper.current > index ? '#E24744' : '#f1f1f1',
                        fontSize: '12px',
                        color: stepper.current > index ? 'white' : stepper.current === index ? '#1D1D1F' : '#797979',
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
            <Button disableRipple variant='text'>
              <Typography variant='body2'>Auto-saved</Typography>
            </Button>
            <Button variant='contained' color='inherit' onClick={() => stepper.handleUpdateStep(0)}>
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
