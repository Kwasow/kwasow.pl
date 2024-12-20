import React from 'react'
import { styled } from 'styled-components'
import { Link, Title } from './Text'
import { Icon } from './icons'

const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TileTitle = styled(Title)`
  text-align: center;
`

export type TileLink = {
  text: string;
  link: string;
}

type TileProps = {
  name: string;
  icon: string;
  links: TileLink[];
}

export function Tile(props: TileProps) {
  const { name, icon, links } = props

  return (
    <TileWrapper>
      <Icon src={icon} alt={`${name} logo`}/>
      <TileTitle>{name}</TileTitle>
      
      {links.map((value, index) => {
        const isInternalLink = value.link.startsWith('/')

        return (
          <Link
            key={index}  
            href={value.link}
            target={isInternalLink ? '' : '_blank'}>  
            {value.text}
          </Link>
        )
      })}
    </TileWrapper>
  )
}
