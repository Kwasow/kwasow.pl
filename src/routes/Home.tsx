import React from 'react'
import {
  Content,
  CurrentProjects,
  Header,
  NavigationBar,
  PastProjects
} from '../components'

export default function Home() {
  return (
    <>
      <NavigationBar title='Home page'/>
      <Content>
        <Header>
          Hi, I&apos;m Karol.<br/>
          These are the projects I am currently working on:
        </Header>
        <CurrentProjects />
        
        <Header>
          Past projects:
        </Header>
        <PastProjects />
      </Content>
    </>
  )
}
