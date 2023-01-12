import React from 'react'
import '../App.css'
import LoginForm from '../components/LoginForm/LoginForm'

export default function Login (props) {
  return (
    <>
      <h1 className='log-in'>Log In
      </h1>
      <LoginForm user={props.user} setUser={props.setUser} />
    </>

  )
}
