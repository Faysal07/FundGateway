import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Color from 'color'
import {
  Box,
  Typography,
  CardContent,
  CardActionArea,
  Card,
  CardActions,
  Button,
  CardMedia,
} from '@material-ui/core'
import Modal from './Modal'

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
  //  TODO: Add Modal
  const classes = useStyles()

  const { name, created, img } = item

  return (
    <Card className={classes.root} align='left'>
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
        <CardActions>
          <Modal item={item} />
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
