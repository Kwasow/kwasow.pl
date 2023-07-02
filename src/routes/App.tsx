import React from 'react'
import { CurrentProjects, Header, PastProjects } from '../components'

function App() {
  return (
    <>
      <Header>
        Hi, I&apos;m Karol.<br/>
        These are the projects I am currently working on:
      </Header>
      <CurrentProjects />
      
      <Header>
        Past projects:
      </Header>
      <PastProjects />
    </>
  )
}

export default App
