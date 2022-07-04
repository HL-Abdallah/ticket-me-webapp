import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const SignLeftSide = () => {
  return (
    <Stack alignItems="center" justifyContent={"space-around"} sx={{height : "100%" , width : "50%"}}>
        <Stack alignItems="baseline" width="60%" >
            <Link href="/">
                <Typography variant="h4" color="initial" sx={{fontWeight : 700}}>TICKET ME</Typography>
            </Link>
        </Stack>
        <img alt='section-image-alt' src="/images/signing.jpg" width='60%' />
    </Stack>
  )
}

export default SignLeftSide