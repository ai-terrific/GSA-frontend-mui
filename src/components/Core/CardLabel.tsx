import { FormControlLabel, styled } from '@mui/material'

export const StyledCardLabel = styled(FormControlLabel)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '8px',
  padding: '10px 16px',
  margin: '8px 0',
  transition: 'all 0.2s ease-in-out',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  '&:has(span.Mui-checked)': {
    borderColor: theme.palette.error.light,
    backgroundColor: theme.palette.error.light, // transparent fill
    color: theme.palette.error.main
  }
}))
