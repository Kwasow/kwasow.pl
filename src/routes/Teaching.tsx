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
            <Title>Casino Royal</Title>
            <Text>
              - 2024/02/05{' '}
              <Link
                href='/static/casino-royal/20240205.pdf'
                target='_blank'>Konspekt</Link>
            </Text>
          </Content>

          <Content>
            <Title>Jamajka</Title>
            <Text>
              - 2024/02/05{' '}
              <Link
                href='/static/jamajka/20240205.pdf'
                target='_blank'>Konspekt</Link>
            </Text>
          </Content>
        </Row>
      </Content>
    </>
  )
}
