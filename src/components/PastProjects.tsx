import React from 'react'
import { Grid } from './Containers'
import { Tile, TileLink } from './Tile'

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

export function PastProjects() {
  return (
    <Grid>
      <ReanimatedTile />
    </Grid>
  )
}
