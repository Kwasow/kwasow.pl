import React from 'react'
import { styled } from 'styled-components'
import { Link } from './Text'

export const Icon = styled.img`
  width: 150px;
  height: 150px;
  background-color: ${props => props.theme.colors.onBackground};
  padding: 20px;
  border-radius: 20px;
  object-fit: contain;
`

export const IconSmall = styled.img`
  width: 30px;
  height: 30px;
  padding: 10px;
  color: ${props => props.theme.colors.onBackground};
`

const IconLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-right: 10px;
  padding-left: 10px;
`

type IconLinkProps = {
  icon: string;
  text: string;
  link: string;
  alt: string;
}

export function IconLink(props: IconLinkProps) {
  const { icon, text, link, alt } = props

  return (
    <IconLinkWrapper>
      <IconSmall src={icon} alt={alt}/>
      <Link href={link}>{text}</Link>
    </IconLinkWrapper>
  )
}
