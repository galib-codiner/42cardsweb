import React, { useEffect } from 'react'
import ContactBanner from '../components/ContactBanner'

const Contact = () => {

  useEffect(() => {
    document.title = "Contact - 42-cards"
  })
  
  return (
    <div>
      <ContactBanner />
    </div>
  )
}

export default Contact