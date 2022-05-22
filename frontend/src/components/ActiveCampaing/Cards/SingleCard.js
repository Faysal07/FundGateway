import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'
import Color from 'color'

import { Box, CardMedia } from '@material-ui/core'
import ProgressBar from './ProgressBar'
import { Divider } from '@material-ui/core'

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
    padding: '10px 20px',
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
})

export default function SingleCard({ item }) {
  //  TODO: Add Modal
  const classes = useStyles()

  const {
    subcategory_name,
    name,
    img,
    description,
    raised,
    pledged,
    donators,
  } = item

  return (
    <Card
      className={classes.root}
      align='left'
      style={
        raised >= pledged
          ? {
              pointerEvents: 'none',
              filter: 'blur(3px)',
            }
          : {}
      }
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title='img' />
        <CardContent>
          <Typography color='textSecondary' gutterBottom variant='h6'>
            {subcategory_name}
          </Typography>
          <Typography gutterBottom variant='h5'>
            {name}
          </Typography>

          <ProgressBar
            value={(raised / pledged > 1 ? 1 : raised / pledged) * 100}
          />
          <Typography
            className={classes.description}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {description}
          </Typography>
          <br />
        </CardContent>
      </CardActionArea>
      <Divider variant='middle' />
      <CardActions className={classes.actions}>
        <Box>
          <Typography
            className={classes.description}
            variant='subtitle1'
            color='textSecondary'
          >
            Raised
          </Typography>
          <Typography
            className={classes.description}
            variant='h6'
            color='primary'
          >
            {raised}৳
          </Typography>
        </Box>
        <Box>
          <Typography
            className={classes.description}
            variant='subtitle1'
            color='textSecondary'
          >
            Pledged
          </Typography>
          <Typography
            className={classes.description}
            variant='h6'
            color='primary'
          >
            {pledged}৳
          </Typography>
        </Box>
        <Box>
          <Typography
            className={classes.description}
            variant='subtitle1'
            color='textSecondary'
          >
            Donators
          </Typography>
          <Typography
            className={classes.description}
            variant='h6'
            color='primary'
          >
            {donators}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  )
}
