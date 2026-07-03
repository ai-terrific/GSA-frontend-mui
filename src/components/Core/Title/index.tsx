import { Typography, TypographyProps, styled } from '@mui/material'

export const SectionTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontFamily: 'Pro Display,sans-serif !important',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 70,
  lineHeight: '80px',
  letterSpacing: -1.44
}))
