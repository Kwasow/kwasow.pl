import React from 'react'
import {
  Content,
  Header,
  Link,
  NavigationBar,
  RowSimple,
  Text,
  Title
} from '../components'

export default function Teaching() {
  return (
    <>
      <NavigationBar title='Teaching' backButton={true}/>
      <Content>
        <Header>
          Materiały do zajęć:
        </Header>

        <Link
          href='/static/podstawa.pdf'
          target='_blank'>Podstawa programowa</Link>

        <RowSimple>
          <CasinoRoyal/>
          <Jamajka/>
        </RowSimple>
      </Content>
    </>
  )
}

function CasinoRoyal() {
  return (
    <Content>
      <Title>Casino Royal</Title>

      <Text>
        
        - 2024/02/12{' '}
        <Link
          href='/static/casino-royal/20240212.pdf'
          target='_blank'>Konspekt</Link>{' '}
        <Link
          href='/static/zadania/zadanie98-uczniowie.zip'
          target='_blank'>Zadanie</Link>
        <br/>

        - 2024/02/05{' '}
        <Link
          href='/static/casino-royal/20240205.pdf'
          target='_blank'>Konspekt</Link>
        
      </Text>

    </Content>
  )
}

function Jamajka() {
  return (
    <Content>
      <Title>Jamajka</Title>

      <Text>

        - 2024/02/12{' '}
        <Link
          href='/static/jamajka/20240212.pdf'
          target='_blank'>Konspekt</Link>{' '}
        <br/>

        - 2024/02/05{' '}
        <Link
          href='/static/jamajka/20240205.pdf'
          target='_blank'>Konspekt</Link>
        
      </Text>
    </Content>
  )
}
