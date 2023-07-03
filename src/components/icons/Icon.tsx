import React, { ReactNode } from 'react'
import { styled } from 'styled-components'
import { Link } from '../Text'

export const Icon = styled.img`
  width: 150px;
  height: 150px;
  background-color: ${props => props.theme.colors.onBackground};
  padding: 20px;
  border-radius: 20px;
  object-fit: contain;
`

const IconLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-right: 15px;
  padding-left: 15px;
`

type IconLinkProps = {
  icon: ReactNode;
  text: string;
  link: string;
}

export function IconLink(props: IconLinkProps) {
  const { icon, text, link } = props

  return (
    <IconLinkWrapper>
      {icon}
      <Link href={link} target='_blank'>{text}</Link>
    </IconLinkWrapper>
  )
}
