import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Color from 'color'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { Box } from '@material-ui/core'

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
    justifyContent: 'center',
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
  const classes = useStyles()

  const { title, img, description } = item

  return (
    <Card className={classes.root} align='center'>
      <CardActionArea>
        <Box my={2}>
          <img src={img} alt='img' />
        </Box>
        {/* <CardMedia className={classes.media} image={img} title='img' /> */}
        <CardContent>
          <Box>
            <Typography gutterBottom variant='h5'>
              {title}
            </Typography>
          </Box>
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
      <CardActions className={classes.actions}>
        <Button endIcon={<ArrowRightAltIcon />} size='small' color='primary'>
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}
