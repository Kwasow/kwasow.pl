import React, { useContext } from 'react'
import { ThemeContext, styled } from 'styled-components'
import { Header, Link } from './Text'
import { ArrowBackIcon } from './icons'
import { useNavigate } from 'react-router-dom'
import { InvisibleRoundButton } from './Button'
import { Row } from './Containers'

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

  padding-left: 20px;
  padding-right: 20px;
`

export function NavigationBar(props: NavigationBarProps) {
  const themeContext = useContext(ThemeContext)
  const navigate = useNavigate()
  
  const { backButton, title } = props

  return (
    <TopBar>
      <Row>
        <div>
          <InvisibleRoundButton onClick={() => navigate('/')}>
            {backButton
              && <ArrowBackIcon color={themeContext?.colors.onBackground}/>}
          </InvisibleRoundButton>
        </div>
        <Header>{title}</Header>
      </Row>
      
      <Row>
        {/* TODO: Add theme switcher */}
        <Link href='#/home'>Home</Link>
        <span style={{ display: 'inline-block', width: '1rem' }}/>
        <Link href='https://startowa.kwasow.pl/docs/category/wstęp'>
          Teaching
        </Link>
      </Row>
    </TopBar>
  )
}
