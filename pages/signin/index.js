import { Stack } from '@mui/material'
import React from 'react'
import SignLeftSide from '../../components/Signing/SignLeftSide'
import SignInRight from '../../components/Signing/SignInRight'

const index = () => {
  return (
  <Stack direction='row'>
      <SignLeftSide/>
      <SignInRight/>
    </Stack>
    )
}

export default index