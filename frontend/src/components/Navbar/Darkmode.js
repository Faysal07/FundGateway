import React from 'react'
import Switch from '@material-ui/core/Switch'

export default function DarkSwitch({ setDarkmode, darkmode }) {
  const handleChange = (e) => {
    setDarkmode((prev) => !prev)
    localStorage.setItem('darkmode', e.target.checked)
  }

  return (
    <Switch
      checked={darkmode}
      onChange={handleChange}
      color='primary'
      name='dark'
    />
  )
}
