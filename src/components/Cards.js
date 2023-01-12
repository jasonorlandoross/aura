import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards () {
  return (
    <div className='cards'>
      <h1>ENHANCE YOUR AURA</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/postitive.png'
              text='"I AM" AFFIRMATIONS'
              label='POSITIVE AFFIRMATIONS'
              path='/affirmations'
            />
            <CardItem
              src='images/meditation.jpeg'
              text='CALM YOUR MIND'
              label='MEDITATION'
              path='/meditations'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/il_fullxfull.2921822142_4y3s.webp'
              text='SINGING BOWLS'
              label='SHOP NOW'
              path='/products'
            />
            <CardItem
              src='images/aura.jpeg'
              text='"WORKING ON MY AURA" JOURNALS'
              label='%20 OFF NEW YEARS SALE'
              path='/products'
            />
            <CardItem
              src='images/betheenergy.jpeg'
              text='"BE THE ENERGY YOU WANT TO ATTRACT"  YOGA MATTS'
              label='SHOP NOW'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
