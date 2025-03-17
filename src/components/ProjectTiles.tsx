import React from 'react'
import { Grid } from './Containers'
import { Tile, TileLink } from './Tile'

function MusekitTile() {
  const name = 'Musekit'
  const icon = 'assets/musekit-icon.svg'
  const links: TileLink[] = [
    { text: 'Privacy Policy', link: '/#/musekit_privacy' },
    {
      text: 'Play Store',
      link: 'https://play.google.com/store/apps/details?id=com.kwasow.musekit'
    },
    { text: 'GitHub', link: 'https://github.com/Kwasow/Musekit' }
  ]
  
  return (
    <Tile name={name} icon={icon} links={links}/>
  )
}

function PokerioTile() {
  const name = 'Pokerio'
  const icon = 'assets/pokerio-icon.svg'
  const links: TileLink[] = [
    { text: 'GitHub', link: 'https://github.com/poker-io' }
  ]

  return (
    <Tile name={name} icon={icon} links={links}/>
  )
}

function WeekendTile() {
  const name = 'Weekend\nz ginekolgią'
  const icon = 'assets/weekend-logo.png'
  const links: TileLink[] = [
    { text: 'Website', link: 'https://weekendzginekologia.org.pl/' },
    { text: 'GitHub', link: 'https://github.com/Kwasow/egg' }
  ]

  return (
    <Tile name={name} icon={icon} links={links}/>
  )
}

function ReanimatedTile() {
  const name = 'Reanimated'
  const icon = 'assets/reanimated-icon.svg'
  const links: TileLink[] = [
    {
      text: 'GitHub',
      link: 'https://github.com/software-mansion/react-native-reanimated'
    },
    {
      text: 'Project site',
      link: 'https://docs.swmansion.com/react-native-reanimated/'
    }
  ]
  
  return (
    <Tile name={name} icon={icon} links={links}/>
  )
}

function BinaryTile() {
  const name = 'Binary'
  const icon = 'assets/binary.svg'
  const links: TileLink[] = [
    {
      text: 'GitHub',
      link: 'https://github.com/Kwasow/binary'
    },
    {
      text: 'Project site',
      link: '/matura/docs/category/wstęp'
    }
  ]
  
  return (
    <Tile name={name} icon={icon} links={links}/>
  )
}

function FlamingoTile() {
  const name = 'Flamingo'
  const icon = 'assets/flamingo.svg'
  const links: TileLink[] = [
    {
      text: 'GitHub',
      link: 'https://github.com/Kwasow/Flamingo'
    }
  ]
  
  return (
    <Tile name={name} icon={icon} links={links}/>
  )
}

export function PastProjects() {
  return (
    <Grid>
      <ReanimatedTile />
      <WeekendTile />
      <PokerioTile />
    </Grid>
  )
}

export function CurrentProjects() {
  return (
    <Grid>
      <MusekitTile />
      <FlamingoTile />
      <BinaryTile />
    </Grid>
  )
}
