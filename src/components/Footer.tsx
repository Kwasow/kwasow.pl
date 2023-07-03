import React from 'react'
import { styled } from 'styled-components'
import { IconLink } from './Icon'

export const Footer = styled.footer`
  background-color: rgb(39, 39, 39);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export function KwasowFooter() {
  return (
    <Footer>
      <IconLink
        icon='assets/github.svg'
        link='https://github.com/Kwasow'
        text='Kwasow'
        alt='GitHub'/>

      <IconLink
        icon='assets/twitter.svg'
        link='https://twitter.com/KarolWasowski'
        text='@KarolWasowski'
        alt='Twitter'/>
    </Footer>
  )
}
