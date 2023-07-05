import React from 'react'

import { Button, ButtonProps } from '../Button/Button'
import styled from 'styled-components'

export const SmallButton = (props: ButtonProps) => {
  const { children, ...otherProps } = props
  return (
    <SmallBtn iconSize={16} {...otherProps}>
      {children}
    </SmallBtn>
  )
}

const SmallBtn = styled(Button)`
  padding: 0 10px;
  min-width: 54px;
  font-size: 14px;

  .childrenContainer {
    padding: 9px 0;
  }

  span {
    margin: 0 5px 0 0;
  }
`
