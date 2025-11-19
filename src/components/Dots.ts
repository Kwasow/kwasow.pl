import styled from 'styled-components'

export const Dots = styled.span`
  flex: 1;
  height: 1em;
  border-bottom: 1px dotted ${props => props.theme.colors.onBackground};
`
