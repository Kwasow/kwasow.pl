import React from 'react'
import {
  Content,
  Header,
  NavigationBar,
  Text
} from '../components'

export default function Teaching() {
  return (
    <>
      <NavigationBar title='Teaching' backButton={true}/>
      <Content>
        <Header>
          Materiały do zajęć:
        </Header>
        <Text>Na razie nic tu nie ma</Text>
      </Content>
    </>
  )
}
