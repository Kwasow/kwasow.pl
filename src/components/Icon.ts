import { styled } from 'styled-components'

export const Icon = styled.img`
  width: 150px;
  height: 150px;
  background-color: ${props => props.theme.colors.onBackground};
  padding: 20px;
  border-radius: 20px;
  object-fit: contain;
`
