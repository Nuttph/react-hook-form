import React from 'react'
import { useParams } from 'react-router-dom'

const AboutById = () => {
    const param = useParams();
  return (
    <div>{param.id}</div>
  )
}

export default AboutById