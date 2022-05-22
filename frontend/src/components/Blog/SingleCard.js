import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Color from 'color'
import {
  Box,
  Typography,
  CardContent,
  CardActionArea,
  Card,
  CardActions,
  CardMedia,
  Button,
} from '@material-ui/core'
import Modal from './Modal'
import axios from 'axios'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: `0 6px 12px 0 ${Color('grey')
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  },
  media: {
    //16:9 ratio
    paddingTop: '56.25%',
    width: '100%',
    objectFit: 'cover',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 5,
    '-webkit-box-orient': 'vertical',
  },
})

export default function SingleCard({ item }) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/project/')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const classes = useStyles()

  if (!data) return 'Loading...'

  const { name, created, img, project_name } = item

  const currentProject = data.find((item) => item.name === project_name)
  if (!currentProject) return 'Loading...'

  console.log({ currentProject })
  return (
    <Card
      className={classes.root}
      align='left'
      style={
        currentProject.raised >= currentProject.pledged
          ? {
              pointerEvents: 'none',
              filter: 'blur(3px)',
            }
          : {}
      }
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title='Cadr img' />
        <CardContent>
          <Box display='flex' justifyContent='space-between'>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
          </Box>

          <Typography variant='body1' color='textPrimary' component='p'>
            Created at: {new Date(created).toDateString()}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Modal item={item} />
          <Button color='primary' component={Link} to='/signin/donate'>
            Donate now
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
