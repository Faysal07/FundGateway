import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { useMediaQuery } from '@material-ui/core'
import Cards from './Cards'
import MobileBanking from './MobileBanking'
import NetBanking from './NetBanking'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component='span'>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    borderRadius: '10px',
    overflow: 'hidden',
  },
}))

export default function ModalTabs({ data, setOpen, setTrasactionID }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position='static'>
        <Tabs
          variant={isSmall ? 'scrollable' : 'fullWidth'}
          scrollButtons={isSmall ? 'auto' : 'off'}
          centered={!isSmall ? true : false}
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Cards' {...a11yProps(0)} />
          <Tab label='Mobile Banking' {...a11yProps(1)} />
          <Tab label='Net Banking' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Cards data={data} setOpen={setOpen} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MobileBanking
          setTrasactionID={setTrasactionID}
          data={data}
          setOpen={setOpen}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NetBanking
          setTrasactionID={setTrasactionID}
          data={data}
          setOpen={setOpen}
        />
      </TabPanel>
    </div>
  )
}
