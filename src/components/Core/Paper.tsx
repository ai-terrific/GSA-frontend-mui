import { Stack, styled } from '@mui/material'

export const StyledPaper = styled(Stack)(({ theme }) => ({
  border: '1px solid #ECECEC',
  background: theme.palette.background.paper,
  padding: 16,
  gap: 8,
  borderRadius: 16
}))
