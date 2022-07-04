import { Stack } from '@mui/material'
import React from 'react'
import SignLeftSide from '../../components/Signing/SignLeftSide'
import SignUpRight from '../../components/Signing/SignUpRight'

const index = () => {
  return (
    <Stack direction='row'>
      <SignLeftSide/>
      <SignUpRight/>
    </Stack>
  )
}

export default index