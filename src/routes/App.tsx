import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import MusekitPrivacy from './MusekitPrivacy'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/musekit_privacy' element={<MusekitPrivacy />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
