import { Box, Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import DarkSwitch from './Darkmode'
import NavDropDown from './NavDropDown'

const NavPC = ({ setDarkmode, darkmode }) => {
  return (
    <Box color='text.secondary'>
      <Button
        exact
        to='/'
        className='inactive'
        activeClassName='active'
        component={NavLink}
      >
        Home
      </Button>
      <Button className='inactive' to='/about' component={NavLink}>
        About us
      </Button>
      <Button className='inactive' to='/invoice' component={NavLink}>
        Get Involved
      </Button>

      <Button className='inactive' to='/blog' component={NavLink}>
        Blog
      </Button>
      <NavDropDown />

      <Button className='inactive' to='/contact' component={NavLink}>
        Contact
      </Button>

      <Button
        activeClassName='none'
        variant='outlined'
        color='primary'
        to='/signin/request'
        startIcon={<FavoriteBorderIcon />}
        component={NavLink}
      >
        Request for Donation
      </Button>
      <Button
        style={{ marginLeft: 10 }}
        activeClassName='none'
        variant='contained'
        color='primary'
        to='/signin/donate'
        startIcon={<FavoriteBorderIcon />}
        component={NavLink}
      >
        Donate Now
      </Button>

      <DarkSwitch setDarkmode={setDarkmode} darkmode={darkmode} />
    </Box>
  )
}

export default NavPC
