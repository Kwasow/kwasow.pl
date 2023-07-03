/* eslint-disable max-len */
import React from 'react'
import { IconProps, RootSvg } from './common'

export function ArrowBackIcon(props: IconProps) {
  const { color } = props

  return (
    <RootSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960">
      
      <path
        fill={color}
        d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/>
    </RootSvg>
  )
}
