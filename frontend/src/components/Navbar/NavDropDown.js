import Menu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import { Link, NavLink } from 'react-router-dom'

const NavDropDown = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  return (
    <>
      <Button
        className='inactive'
        component={NavLink}
        to='/media'
        {...bindHover(popupState)}
      >
        Media
      </Button>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem
          component={Link}
          to={'/media/photos'}
          onClick={popupState.close}
        >
          Photos
        </MenuItem>
        <MenuItem
          component={Link}
          to={'/media/videos'}
          onClick={popupState.close}
        >
          Videos
        </MenuItem>
      </Menu>
    </>
  )
}

export default NavDropDown
