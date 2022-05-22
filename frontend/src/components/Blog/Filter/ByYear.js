import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
} from '@material-ui/core'

const ByYear = ({ year, setYear }) => {
  return (
    <Box pt={5}>
      <Paper>
        <List subheader={<ListSubheader>By Year:</ListSubheader>}>
          <ListItem
            button
            selected={year === 2021}
            onClick={(event) => setYear(2021)}
          >
            <ListItemText primary='2021' />
          </ListItem>
          <ListItem
            button
            selected={year === 2020}
            onClick={(event) => setYear(2020)}
          >
            <ListItemText primary='2020' />
          </ListItem>
          <ListItem
            button
            selected={year === 2019}
            onClick={(event) => setYear(2019)}
          >
            <ListItemText primary='2019' />
          </ListItem>
        </List>
      </Paper>
    </Box>
  )
}

export default ByYear
