/* eslint-disable max-len */
import React from 'react'
import { IconProps } from './common'

export function ArrowBackIcon(props: IconProps) {
  const { color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48">
      
      <path
        fill={color}
        d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/>
    </svg>
  )
}
