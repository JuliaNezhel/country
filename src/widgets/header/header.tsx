import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const ResponsiveAppBar = () => {
  return (
    <AppBar position={'static'}>
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters>
          <Typography
            component={'a'}
            href={'#app-bar-with-responsive-menu'}
            noWrap
            sx={{
              color: 'inherit',
              display: { md: 'flex', xs: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              mr: 2,
              textDecoration: 'none',
            }}
            variant={'h6'}
          >
            <Link to={'/'}>COUNTRIES</Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
