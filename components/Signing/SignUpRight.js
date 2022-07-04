import { Stack, IconButton, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SignUpRight = () => {
  return (
    <Stack alignItems="center" justifyContent={"space-around"} sx={{ bgcolor : "lightgrey" , width : "50%"}}>
        <Stack direction="row" alignItems="center" gap={2} > 
            <IconButton aria-label="go back to home page" color="inherit">
              <ArrowBackIosNewIcon/>
            </IconButton>
            <Typography variant="h5" color="initial" sx={{fontWeight : 700}}>CREATE YOUR ACCOUNT</Typography>
        </Stack>
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
            <TextField
              id="email field"
              label="Confirm Password"
              type="password"
            />
            <Button variant="contained" color="primary" fullWidth>sign up</Button>
        </Stack>
        <Stack>
             
        </Stack>
    </Stack>
  )
}

export default SignUpRight