import { Box, Link, Typography } from '@mui/material'
import { memo } from 'react'

import { Links } from '@/constants'

// Main Component
const NavLinks = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 8 }}>
      {Links.map(link => (
        <Link key={link.title} href={link.link} underline='none'>
          <Typography color='dark'>{link.title}</Typography>
        </Link>
      ))}
    </Box>
  )
}

export default memo(NavLinks)
