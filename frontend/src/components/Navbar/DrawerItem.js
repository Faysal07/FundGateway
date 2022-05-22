import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const DrawerItem = ({ toggle, name, path, icon }) => {
  return (
    <ListItem to={path} button onClick={toggle('right', false)}>
      <ListItemIcon>
        {icon ? <FavoriteBorderIcon /> : <ArrowRightIcon />}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  )
}

export default DrawerItem
