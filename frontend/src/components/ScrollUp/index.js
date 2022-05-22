import * as React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'

function ScrollTop(props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <Box
        component='a'
        href='#'
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  )
}

export default function BackToTop(props) {
  return (
    <ScrollTop {...props}>
      <Fab color='secondary' size='small' aria-label='scroll back to top'>
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  )
}
