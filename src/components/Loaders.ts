import styled from 'styled-components'

export const BlinkingLoader = styled.span`
  width: 2em;
  height: 2em;
  display: inline-block;
  position: relative;
  margin: 8px;

  &:after, &:before {
    content: '';  
    box-sizing: border-box;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background: #FFF;
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 1s linear infinite;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`
