import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Animate = ({ children, anim = 'zoom-in-up' }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })
  return <div data-aos={anim}>{children}</div>
}

export default Animate
