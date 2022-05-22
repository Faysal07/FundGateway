import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TabCards from './TabCards'
import { useMediaQuery } from '@material-ui/core'
import axios from 'axios'
import TabCardsFilter from './TabCardsFilter'

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

export default function CardTabs({ data }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [categories, setCategories] = useState([])
  const [projects, setProjects] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/category/')
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get('http://127.0.0.1:8000/api/project/')
      .then((res) => {
        setProjects(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
          <Tab label='All' {...a11yProps(0)} />
          {categories.map((category, index) => (
            <Tab
              key={index}
              label={category.cat_name}
              {...a11yProps(index + 1)}
            />
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TabCards project={projects} />
      </TabPanel>
      {categories.map((category, index) => (
        <TabPanel value={value} index={index + 1} key={index}>
          <TabCardsFilter project={projects} category={category} />
        </TabPanel>
      ))}
    </div>
  )
}
