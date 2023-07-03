import React, { useContext } from 'react'
import { ThemeContext, styled } from 'styled-components'
import { GithubIcon, IconLink, TwitterIcon } from './icons'

export const Footer = styled.footer`
  background-color: ${props => props.theme.colors.footer};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export function KwasowFooter() {
  const themeContext = useContext(ThemeContext)
  const iconColor = themeContext?.colors.icon

  return (
    <Footer>
      <IconLink
        icon={<GithubIcon color={iconColor}/>}
        link='https://github.com/Kwasow'
        text='Kwasow'/>

      <IconLink
        icon={<TwitterIcon color={iconColor}/>}
        link='https://twitter.com/KarolWasowski'
        text='@KarolWasowski'/>
    </Footer>
  )
}