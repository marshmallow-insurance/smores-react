import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { Icons, iconList } from '../iconsList'

export const Container = () => {
  return (
    <div>
      {Object.keys(iconList).map((icon: Icons) => {
        return (
          <Wrapper key={icon}>
            <span>{icon}</span>
            <Icon render={icon} />
          </Wrapper>
        )
      })}
    </div>
  )
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 250px;
`
