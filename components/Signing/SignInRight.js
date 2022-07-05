import { Stack, IconButton, Typography, Button, TextField } from '@mui/material'
import React from 'react'

import Link from 'next/link'

function SignInRight() {
    return (
        <Stack alignItems="center" justifyContent={"space-around"} sx={{ bgcolor : "lightgrey" , width : "50%"}}>
                <Typography variant="h5"  alignItems="center" color="initial" sx={{fontWeight : 700}}>WELCOME BACK</Typography>
            
            <Stack id="2nd stack" width="50%" gap={2}>
                <TextField
                  id="email field"
                  label="Email"
                />
                <TextField
                  id="password field"
                  label="Password"
                  type="password"
                />
                <Link href="" style={{ textDecoration: 'none' }}   >
                     <Button disableRipple variant="text" color="primary" sx={{ justifyContent: 'flex-end' }} >
                         Forgot password ?
                     </Button>
                 </Link>
                <Button variant="contained" color="primary" fullWidth>sign in</Button>
            </Stack>
            <Stack direction='row'alignItems="center" gap={0.5}>
            <Typography variant="h8"  alignItems="center" color="initial" sx={{fontWeight : 300}}>Dont have an account ?</Typography>
            <Link href="/signup" style={{ textDecoration: 'none' }}   >
                     <Button disableRipple variant="text" color="primary"  >
                         Signup
                     </Button>
                 </Link>
                 
            </Stack>
        </Stack>
      )
}

export default SignInRight