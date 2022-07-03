import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import Link from 'next/link'

const HomePageNavbar = () => {
  return (
    <AppBar elevation={0} position="sticky" color="inherit" sx={{pl : 8, pr : 8,pt :1, mb: 5}}>
      <Toolbar >
            <Typography variant="h6" sx={{flexGrow : 1, fontWeight : "bold"}} >
            TICKET ME
            </Typography>
        <Stack direction={'row'}>
            <Link href="/signup" style={{ textDecoration: 'none' }} >
                <Button disableRipple variant="text" color="inherit">
                S'inscrire
                </Button>
            </Link>
            <Button disableRipple variant="text" color="inherit">
            Se Connecter
            </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default HomePageNavbar