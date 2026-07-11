import { Stack, Typography } from '@mui/material'

import { FooterContainer } from './components/Container'

export default function Footer() {
  return (
    <FooterContainer>
      <Typography>© 2024 Southentic, Inc. All rights reserved</Typography>
      <Stack direction='row' spacing={6}>
        <Typography>Terms of Use</Typography>
        <Typography>Privacy</Typography>
        <Typography>Contact</Typography>
        <Typography>Cookie</Typography>
        <Typography>Preferences</Typography>
      </Stack>
    </FooterContainer>
  )
}
