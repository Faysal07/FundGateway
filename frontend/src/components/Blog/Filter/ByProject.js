import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
} from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ByProject = ({ project, setProject }) => {
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

  return (
    <Box py={3}>
      <Paper>
        <List subheader={<ListSubheader>By Project:</ListSubheader>}>
          <ListItem
            button
            selected={project === ''}
            onClick={() => setProject('')}
          >
            <ListItemText primary='All' />
          </ListItem>
          {data.map((item) => (
            <ListItem
              key={item.id}
              button
              selected={project === item.name}
              onClick={() => setProject(item.name)}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  )
}

export default ByProject
