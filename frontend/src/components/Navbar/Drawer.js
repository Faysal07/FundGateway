import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'

import { IconButton, List, Typography } from '@material-ui/core'
import DrawerItem from './DrawerItem'
import DarkSwitch from './Darkmode'
import { Box } from '@material-ui/core'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

export default function Drawer({ setDarkmode, darkmode }) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <DrawerItem name='Home' path='/' toggle={toggleDrawer} />
        <DrawerItem name='About' path='/about' toggle={toggleDrawer} />
        <DrawerItem name='Causes' path='/causes' toggle={toggleDrawer} />
        <DrawerItem name='Team' path='/team' toggle={toggleDrawer} />
        <DrawerItem name='Blog' path='/blog' toggle={toggleDrawer} />
        <DrawerItem
          name='Request Donation'
          path='/login'
          icon={true}
          toggle={toggleDrawer}
        />
        <DrawerItem
          name='Donate'
          path='/login'
          icon={true}
          toggle={toggleDrawer}
        />

        <Box display='flex' alignItems='center'>
          <DarkSwitch setDarkmode={setDarkmode} darkmode={darkmode} />
          <Typography display='inline'>Dark Mode Switch</Typography>
        </Box>
      </List>
    </div>
  )

  return (
    <>
      <IconButton
        size='small'
        color='inherit'
        onClick={toggleDrawer('right', true)}
      >
        <MenuIcon fontSize='large' />
      </IconButton>
      <SwipeableDrawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
      </SwipeableDrawer>
    </>
  )
}
