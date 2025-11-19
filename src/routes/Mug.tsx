import React from 'react'
import {
  Content,
  NavigationBar,
} from '../components'
import { MugTracker } from '../features/mug/components'

export default function Mug() {
  return (
    <>
      <NavigationBar title='Złodziej kubka'/>
      <Content>
        <MugTracker />
      </Content>
    </>
  )
}
