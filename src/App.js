import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import SignUp from './pages/SignUp'
import Meditations from './pages/Meditations'
import { getUser } from './utilities/users-service'
import Affirmations from './pages/Affirmations'

function App () {
  const [user, setUser] = useState(getUser)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/affirmations' element={<Affirmations />} />
        <Route path='/meditations' element={<Meditations />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp user={user} setUser={setUser} />} />
        {/* <Route path='/log-in' element={<LogIn user={user} setUser={setUser} />} /> */}
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}


export default App
