import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection () {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>AURA</h1>
      <p>New Year New Glow</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LOG IN
        </Button>
        <Button 
         Style='btn--primary'
          buttonSize='btn--large'
           
          onClick={console.log('hey')}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
