import React from 'react'
import { CurrentProjects, Header, PastProjects } from '../components'

export default function Home() {
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
