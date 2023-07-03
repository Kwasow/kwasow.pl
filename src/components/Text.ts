import { styled } from 'styled-components'

export const Header = styled.h1`
  color: ${props => props.theme.colors.onBackground};
`

export const Text = styled.p`
  color: ${props => props.theme.colors.onBackground};
  white-space: pre-wrap;
`

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0;
  padding-bottom: 0;
`

export const Link = styled.a`
  font-size: 0.9rem;

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
