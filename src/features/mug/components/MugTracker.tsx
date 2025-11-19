import React from 'react'
import { useAppSelector } from '../../../redux/setupHooks'
import { Text } from '../../../components/Text'

export function MugTracker() {
  const loading = useAppSelector(state => state.mug.loading)
  const ip = useAppSelector(state => state.mug.ip)
  const screenWidth = useAppSelector(state => state.mug.windowWidth)
  const screenHeight = useAppSelector(state => state.mug.windowHeight)
  const browser = useAppSelector(state => state.mug.browser)
  const os = useAppSelector(state => state.mug.os)
  const device = useAppSelector(state => state.mug.device)

  return <>
    <Text>Loading: {loading ? 'true' : 'false'}</Text>
    <Text>IP: {ip}</Text>
    <Text>Screen size: {screenWidth}x{screenHeight}</Text>
    <Text>Browser: {browser} </Text>
    <Text>OS: {os}</Text>
    <Text>Device: {device}</Text>
  </>
}
