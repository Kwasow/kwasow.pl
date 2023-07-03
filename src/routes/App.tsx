import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import MusekitPrivacy from './MusekitPrivacy'
import { KwasowFooter, MainWrapper } from '../components'
import { ThemeSwitcher } from '../components/DynamicTheme'

export default function App() {
  return (
    <MainWrapper>
      <div>
        <ThemeSwitcher />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/musekit_privacy' element={<MusekitPrivacy />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

      <KwasowFooter />
    </MainWrapper>
  )
}
