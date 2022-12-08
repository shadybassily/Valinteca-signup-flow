import React from 'react'
import './error.styles.css'
export default function ErrorMessage({message}) {
  return (
    <p className='error'>{message}</p>
  )
}

