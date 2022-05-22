import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import Nav from './Nav'

function HideOnScroll(props) {
  const { children, window } = props

  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Navbar(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color='inherit'>
          <Toolbar>
            <Nav darkmode={props.darkmode} setDarkmode={props.setDarkmode} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* <Container>{props.children}</Container> */}
    </>
  )
}
