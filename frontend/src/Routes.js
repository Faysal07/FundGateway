import SignIn from 'components/User/SignIn'
import SignUp from 'components/User/SignUp'
import Blog from 'pages/Blog'
import Donation from 'pages/Donate'
import Requests from 'pages/Request'
import Home from 'pages/Home'
import { Route, Switch } from 'react-router-dom'
import MediaPhotos from 'pages/MediaPhotos'
import MediaVideos from 'pages/MediaVideos'
import EmailAll from 'pages/EmailAll'
import About from 'pages/About'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/signup/:id'>
        <SignUp />
      </Route>
      <Route path='/signin' exact>
        <SignIn />
      </Route>
      <Route path='/signin/:id'>
        <SignIn />
      </Route>
      <Route path='/donate'>
        <Donation />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/request'>
        <Requests />
      </Route>
      <Route path='/blog'>
        <Blog />
      </Route>
      <Route exact path='/media'>
        <MediaPhotos />
      </Route>
      <Route path='/media/photos'>
        <MediaPhotos />
      </Route>
      <Route path='/media/videos'>
        <MediaVideos />
      </Route>
      <Route path='/emailall'>
        <EmailAll />
      </Route>
    </Switch>
  )
}

export default Routes
