import React from 'react'
import PageTemplate from '../components/page-template/PageTemplate'
import signUpPhoto from '../assets/images/signup.svg'

export default function SignUp() {
  return (
    <PageTemplate 
       imgSrc={signUpPhoto}
        headLine="Create Account"
        subHead="Go ahead and sign up, let everyone knows how awesome you are!"
    />
  )
}
