import { styled } from 'styled-components'

export const Header = styled.h1`
  color: ${props => props.theme.colors.onBackground};
  text-align: center;
`

export const Text = styled.p`
  color: ${props => props.theme.colors.onBackground};
  white-space: pre-wrap;
`

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 1.25rem
`

export const Link = styled.a`
  &:link {
    color: ${props => props.theme.colors.onBackground};
  }

  &:visited {
    color: ${props => props.theme.colors.onBackground};
  }

  &:hover {
    color: ${props => props.theme.colors.onBackground};
  }
`
