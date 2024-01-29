import React, { useContext } from 'react'
import { ThemeContext, styled } from 'styled-components'
import { Header, Link } from './Text'
import { ArrowBackIcon } from './icons'
import { useNavigate } from 'react-router-dom'
import { InvisibleRoundButton } from './Button'

type NavigationBarProps = {
  title: string;
  backButton?: boolean;
}

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.footer};

  padding-left: 1%;
  padding-right: 1%;
`

export function NavigationBar(props: NavigationBarProps) {
  const themeContext = useContext(ThemeContext)
  const navigate = useNavigate()
  
  const { backButton, title } = props

  return (
    <TopBar>
      <InvisibleRoundButton onClick={() => navigate('/')}>
        {backButton
          && <ArrowBackIcon color={themeContext?.colors.onBackground}/>}
      </InvisibleRoundButton>
      <Header>{title}</Header>
      {/* TODO: Add theme switcher */}
      <div>
        <Link href='#/home'>Home</Link>
        <span style={{ display: 'inline-block', width: '1rem' }}/>
        <Link href='#/teaching'>Teaching</Link>
      </div>
    </TopBar>
  )
}
