import { Grid } from '@material-ui/core'
import Animate from 'utils/Animate'
import SingleCard from './Cards/SingleCard'

const TabCardsFilter = ({ project, category }) => {
  const filteredProjects = project.filter(
    (pro) => pro.category_name === category.cat_name
  )
  return (
    <Grid container spacing={5}>
      {filteredProjects.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <Animate anim='zoom-in-up'>
            <SingleCard item={item} />
          </Animate>
        </Grid>
      ))}
    </Grid>
  )
}

export default TabCardsFilter
