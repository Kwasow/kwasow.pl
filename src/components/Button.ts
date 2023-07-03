import { styled } from 'styled-components'

export const InvisibleButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  font-weight: bold;

  border: none;
  outline: none;
  background-color: transparent;

  border-radius: 1vh;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.onFooterHover};
  }
`

export const InvisibleRoundButton = styled(InvisibleButton)`
  border-radius: 50%;
`
