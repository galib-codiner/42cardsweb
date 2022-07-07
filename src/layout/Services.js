import React, { useEffect } from 'react'
import ServiceBanner from '../components/ServiceBanner'

const Services = () => {

  useEffect(() => {
    document.title = "Services - 42-cards"
  })

  return (
    <div>
      <ServiceBanner />
    </div>
  )
}

export default Services