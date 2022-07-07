import React, { useEffect } from 'react'
import AboutBanner from '../components/AboutBanner'

const About = () => {

  useEffect(() => {
    document.title = "About Us - 42-cards"
  })

  return (
    <div>
      <AboutBanner />
    </div>
  )
}

export default About