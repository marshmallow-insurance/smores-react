import { render, screen } from '../testUtils'
import { it, expect } from 'vitest'
import { Tag } from '../Tag'
import { TagProps } from './Tag'

describe('Tag Component', () => {
  it('renders snapshot test correctly', () => {
    const { container } = render(
      <Tag
        label="Snapshot Test Tag"
        color="color.illustration.neutral.400"
        bgColor="extended1.20"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  describe('old colour name', () => {
    testCases.forEach(({ description, props }) => {
      test(description, () => {
        const { container } = render(<Tag {...props} />)

        expect(screen.getByText(props.label)).toBeInTheDocument()

        if (props.icon) {
          const iconElement = screen.getByTestId(`tag-icon-${props.icon}`)
          expect(iconElement).toBeInTheDocument()
        } else {
          const iconElement = screen.queryByTestId(`tag-icon-${props.icon}`)
          expect(iconElement).not.toBeInTheDocument()
        }

        expect(container.firstChild).toHaveStyle('backgroundColor: #d2d2d2')
      })
    })
  })
  describe('new colour name', () => {
    testCasesWithNewColourNames.forEach(({ description, props }) => {
      test(description, () => {
        const { container } = render(<Tag {...props} />)

        expect(screen.getByText(props.label)).toBeInTheDocument()

        if (props.icon) {
          const iconElement = screen.getByTestId(`tag-icon-${props.icon}`)
          expect(iconElement).toBeInTheDocument()
        } else {
          const iconElement = screen.queryByTestId(`tag-icon-${props.icon}`)
          expect(iconElement).not.toBeInTheDocument()
        }

        expect(container.firstChild).toHaveStyle('backgroundColor: #d2d2d2')
      })
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
      iconColor: 'color.illustration.accent2.200',
    } as TagProps,
  },
  {
    description:
      'Renders Tag with label Test Tag 0003 and no icon if iconColor: color.illustration.accent2.200, icon: undefined',
    props: {
      label: 'Test Tag 0003',
      color: 'apple',
      bgColor: 'chia',
      iconColor: 'color.illustration.accent2.200',
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

const testCasesWithNewColourNames = [
  {
    description: 'Renders Tag with label Test Tag 0001',
    props: {
      label: 'Test Tag 0001',
      color: 'color.feedback.positive.200',
      bgColor: 'color.feedback.inactive.100',
    } as TagProps,
  },
  {
    description: 'Renders Tag with label Test Tag 0002 and flag icon',
    props: {
      label: 'Test Tag 0002',
      color: 'color.feedback.positive.200',
      bgColor: 'color.feedback.inactive.100',
      icon: 'flag',
      iconColor: 'color.illustration.accent2.200',
    } as TagProps,
  },
  {
    description:
      'Renders Tag with label Test Tag 0003 and no icon if iconColor: color.illustration.accent2.200, icon: undefined',
    props: {
      label: 'Test Tag 0003',
      color: 'color.feedback.positive.200',
      bgColor: 'color.feedback.inactive.100',
      iconColor: 'color.illustration.accent2.200',
    } as TagProps,
  },
  {
    description:
      'Renders Tag with label Test Tag 0004 and icon with default color if iconColor: undefined',
    props: {
      label: 'Test Tag 0004',
      color: 'color.feedback.positive.200',
      bgColor: 'color.feedback.inactive.100',
      icon: 'flagFilled',
    } as TagProps,
  },
]
