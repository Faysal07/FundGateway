import { Container, Grid } from '@material-ui/core'
import Cards from 'components/Blog/Cards'
import Filter from 'components/Blog/Filter'
import { useState } from 'react'

const Blog = () => {
  const [year, setYear] = useState(2021)
  const [project, setProject] = useState('')
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={9}>
          <Cards year={year} project={project} />
        </Grid>
        <Grid item sm={3}>
          <Filter
            year={year}
            setYear={setYear}
            project={project}
            setProject={setProject}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Blog
