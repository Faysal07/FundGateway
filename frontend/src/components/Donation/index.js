import React from 'react'
import Box from '@material-ui/core/Box'
import Donate from './Donate'
import Request from './Request'

export default function Donation() {
  return (
    <Box my={5}>
      <Donate />

      <Request />
    </Box>
  )
}
