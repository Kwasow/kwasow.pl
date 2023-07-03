import React, { useEffect, useState } from 'react'
import { Content, Text } from '../components'
import { NavigationBar } from '../components'

const policyURL = 'assets/musekit-privacy.txt'

export default function MusekitPrivacy() {
  const [policyText, setPolicyText] = useState('Loading...')

  useEffect(() => {
    fetch(policyURL)
      .then(res => res.text())
      .then(res => setPolicyText(res))
      .catch(err => {
        console.error(err)
        setPolicyText('Loading failed')
      })
  }, [])

  return (
    <>
      <NavigationBar title='Musekit privacy policy' backButton/>
      <Content>
        <Text>{policyText}</Text>
      </Content>
    </>
  )
}
