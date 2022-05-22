import { Box, Grid, Typography } from '@material-ui/core'
import ourStory from 'img/aboutPage/ourStory.jpg'

const OurStory = () => {
  return (
    <Box my={10}>
      <Grid container spacing={5} alignItems='center'>
        <Grid item xs={12} sm={6}>
          <img src={ourStory} width='100%' alt='ourStory' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant='h4'
            style={{ fontWeight: 'bold', marginBottom: 10 }}
          >
            Our Story
          </Typography>
          <Typography variant='body1'>
            Duo putent aliquam fierent et, no quis labores vituperata quo, velit
            pericula scriptorem eos ad. Ad dolor audire propriae mei, doming
            probatus quo ei. Offendit pertinax percipitur no ius, te mel agam
            omnis accusata. Populo aliquam tacimates ea eos, elit propriae
            delicatissimi vix ne. Sed audire vivendo posidonium et, ne mel dicta
            bonorum mediocritatem. Vim aliquid vivendo fastidii id, ex est
            nostrud vivendum. Epicuri iudicabit maiestatis et qui, ex qui quidam
            atomorum similique. Simul docendi ne eam, erat assum scripta ea duo,
            et mea aliquid vituperata mediocritatem. Elitr nullam quo et, an est
            quando mucius ridens.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default OurStory
