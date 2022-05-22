import { makeStyles } from '@material-ui/core/styles'

import Color from 'color'
import {
  Typography,
  CardContent,
  CardActionArea,
  Card,
  Button,
} from '@material-ui/core'

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
  const classes = useStyles()

  const { img, title, desc } = item
  return (
    <Card className={classes.root} align='center'>
      <CardActionArea rea>
        <img
          src={img}
          style={{
            border: '3px solid #4caf50',
            borderRadius: 10,
            padding: '5px',
            marginTop: 20,
          }}
          height={80}
          alt='img'
        />
        <CardContent>
          <Typography
            style={{ padding: '10px 0', fontWeight: 'bold' }}
            gutterBottom
            variant='h5'
            component='h2'
          >
            {title}
          </Typography>
          <Typography gutterBottom variant='body1' component='h2'>
            {desc}
          </Typography>
          <Button style={{ marginTop: 30 }} color='primary' variant='outlined'>
            Learn More
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
