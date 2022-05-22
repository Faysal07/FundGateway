import { Box, Button, Hidden } from '@material-ui/core'
import Drawer from './Drawer'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import logo from 'img/logo.png'
import NavPC from './NavPC'
import { NavLink, Link } from 'react-router-dom'

const Nav = ({ setDarkmode, darkmode }) => {
  return (
    <Box
      width='100%'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box component={Link} to='/'>
        <img height={60} src={logo} alt='logo' />
      </Box>
      <Hidden smDown>
        <NavPC setDarkmode={setDarkmode} darkmode={darkmode} />
      </Hidden>

      <Hidden mdUp>
        <Box>
          <Button
            activeClassName='none'
            variant='outlined'
            color='primary'
            to='/signup'
            startIcon={<FavoriteBorderIcon />}
            component={NavLink}
          >
            Donate
          </Button>

          <Drawer darkmode={darkmode} setDarkmode={setDarkmode} />
        </Box>
      </Hidden>
    </Box>
  )
}

export default Nav
