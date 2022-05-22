import { Box } from '@material-ui/core'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Mobile from './Mobile'
import Pc from './Pc'

const Image = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })
  return (
    <Box my={3}>
      <Pc />
      <Mobile />
    </Box>
  )
}

export default Image
