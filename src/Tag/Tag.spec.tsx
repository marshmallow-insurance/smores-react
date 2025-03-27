import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tag } from '../Tag'
import { TagProps } from './Tag'

describe('Tag Component', () => {
  testCases.forEach(({ description, props }) => {
    test(description, () => {
      render(<Tag {...props} />)

      expect(screen.getByText(props.label)).toBeInTheDocument()

      if (props.icon) {
        const iconElement = screen.getByTestId(`tag-icon-${props.icon}`)
        expect(iconElement).toBeInTheDocument()
      } else {
        const iconElement = screen.queryByTestId(`tag-icon-${props.icon}`)
        expect(iconElement).not.toBeInTheDocument()
      }
    })
  })
})

const testCases = [
  {
    description: 'Renders Tag with label Test Tag 0001',
    props: {
      label: 'Test Tag 0001',
      color: 'apple',
      bgColor: 'chia',
    } as TagProps,
  },
  {
    description: 'Renders Tag with label Test Tag 0002 and flag icon',
    props: {
      label: 'Test Tag 0002',
      color: 'apple',
      bgColor: 'chia',
      icon: 'flag',
      iconColor: 'blueberry',
    } as TagProps,
  },
  {
    description:
      'Renders Tag with label Test Tag 0003 and no icon if iconColor: blueberry, icon: undefined',
    props: {
      label: 'Test Tag 0003',
      color: 'apple',
      bgColor: 'chia',
      iconColor: 'blueberry',
    } as TagProps,
  },
  {
    description:
      'Renders Tag with label Test Tag 0004 and icon with default color if iconColor: undefined',
    props: {
      label: 'Test Tag 0004',
      color: 'apple',
      bgColor: 'chia',
      icon: 'flagFilled',
    } as TagProps,
  },
]
