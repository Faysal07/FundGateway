import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { green, amber } from '@material-ui/core/colors'
import { CssBaseline } from '@material-ui/core'

import Routes from 'Routes'
import Navbar from 'components/Navbar/'
import Footer from 'components/Footer'
import { useState } from 'react'
import BackToTop from 'components/ScrollUp'

const App = () => {
  const dark = localStorage.getItem('darkmode') || false

  const [darkmode, setDarkmode] = useState(JSON.parse(dark))
  console.log(darkmode)
  const theme = createTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
      primary: green,
      secondary: amber,
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
      <Routes />
      <BackToTop />
      <Footer />
    </ThemeProvider>
  )
}

export default App
