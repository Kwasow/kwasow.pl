import { styled } from 'styled-components'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  gap: 40px;
  justify-content: center;
  align-items: flex-start;
`

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
