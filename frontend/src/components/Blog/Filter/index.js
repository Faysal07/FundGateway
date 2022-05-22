import { Box, Divider, Typography, useTheme } from '@material-ui/core'

import ByProject from './ByProject'
import ByYear from './ByYear'

const Filter = ({ year, setYear, project, setProject }) => {
  const theme = useTheme()

  return (
    <>
      <Box mt={3}>
        <Typography align='left' variant='h2'>
          Filters
        </Typography>
        <Divider
          style={{
            height: 3,
            borderRadius: 10,
            background: theme.palette.primary.main,
          }}
        />
      </Box>
      <ByYear year={year} setYear={setYear} />
      <ByProject project={project} setProject={setProject} />
    </>
  )
}

export default Filter
