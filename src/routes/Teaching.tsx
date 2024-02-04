import React from 'react'
import {
  Content,
  Header,
  Link,
  NavigationBar,
  Row,
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
          href='/static/podstawa-20240204.pdf'
          target='_blank'>Podstawa programowa</Link>

        <Row>
          <Content>
            <Title>Klasa 3</Title>
            <Text>
              - 2024/02/05{' '}
              <Link
                href='/static/20240205-konspekt.pdf'
                target='_blank'>Konspekt</Link>{' '}
              <Link
                href='/'
                target='_blank'>Test</Link>{' '}
              <Link
                href='/static/zadania/zadanie82-piraci.pdf'
                target='_blank'>Praca domowa</Link>
            </Text>
          </Content>

          <Content>
            <Title>Klasa 4</Title>
            <Text>
              - 2024/02/05{' '}
              <Link
                href='/static/20240205-konspekt.pdf'
                target='_blank'>Konspekt</Link>{' '}
              <Link
                href='/'
                target='_blank'>Test</Link>{' '}
              <Link
                href='/static/zadania/zadanie82-piraci.pdf'
                target='_blank'>Praca domowa</Link>
            </Text>
          </Content>
        </Row>
      </Content>
    </>
  )
}
