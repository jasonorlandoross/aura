import React from 'react'
import '../App.css'
import SignUpForm from '../components/SignUpForm/SignUpForm'

export default function SignUp (props) {
  return (
    <>
      {/* <h1 className='sign-up'>SIGN UP
    </h1> */}
      <SignUpForm user={props.user} setUser={props.setUser} />
    </>

  )
}
