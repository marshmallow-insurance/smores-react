import { createRef } from 'react'
import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { CheckboxCard } from './CheckboxCard'
import { CheckboxCardGroup } from './CheckboxCardGroup'

const getCard = (name: string) =>
  screen.getByRole('checkbox', { name }).closest('label') as HTMLElement

describe('CheckboxCard', () => {
  it('renders a checkbox named by its label', () => {
    const { container } = render(<CheckboxCard label="Bereavement" />)

    expect(
      screen.getByRole('checkbox', { name: 'Bereavement' }),
    ).not.toBeChecked()
    expect(container).toMatchSnapshot()
  })

  it('toggles when the label is clicked, without a checked prop', () => {
    const onChange = vi.fn()
    render(<CheckboxCard label="Bereavement" onChange={onChange} />)

    fireEvent.click(screen.getByText('Bereavement'))

    expect(screen.getByRole('checkbox', { name: 'Bereavement' })).toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('follows the checked prop when controlled', () => {
    const onChange = vi.fn()
    render(<CheckboxCard label="Bereavement" checked onChange={onChange} />)

    const checkbox = screen.getByRole('checkbox', { name: 'Bereavement' })
    fireEvent.click(checkbox)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(checkbox).toBeChecked()
  })

  it('passes the ref and the input attributes to the checkbox', () => {
    const ref = createRef<HTMLInputElement>()
    render(
      <CheckboxCard
        ref={ref}
        label="Bereavement"
        id="bereavement"
        name="circumstances"
        value="bereavement"
        defaultChecked
      />,
    )

    const checkbox = screen.getByRole('checkbox', { name: 'Bereavement' })
    expect(ref.current).toBe(checkbox)
    expect(checkbox).toHaveAttribute('id', 'bereavement')
    expect(checkbox).toHaveAttribute('name', 'circumstances')
    expect(checkbox).toHaveAttribute('value', 'bereavement')
    expect(checkbox).toBeChecked()
  })

  it('describes the checkbox with the description, not the name', () => {
    render(
      <CheckboxCard
        label="Illness"
        description="Physical or mental"
        aria-describedby="hint"
      />,
    )

    const checkbox = screen.getByRole('checkbox', { name: 'Illness' })
    expect(checkbox).toHaveAccessibleDescription('Physical or mental')
    expect(checkbox.getAttribute('aria-describedby')).toMatch(/^hint /)
  })

  it('renders the slot content above the checkbox and label', () => {
    render(
      <CheckboxCard label="Illness">
        <p>Extra content</p>
      </CheckboxCard>,
    )

    const slot = screen.getByText('Extra content')
    const checkbox = screen.getByRole('checkbox', { name: 'Illness' })
    expect(
      slot.compareDocumentPosition(checkbox) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(getCard('Illness')).toContainElement(slot)
  })

  it.each([null, undefined, false, ''])(
    'renders no empty wrappers when the optional content is %p',
    (empty) => {
      render(
        <CheckboxCard label="Illness" description={empty}>
          {empty}
        </CheckboxCard>,
      )

      const card = getCard('Illness')
      // Only the row, which holds the input, the box, the outline and the text
      expect(card.children).toHaveLength(1)
      expect(card.children[0].children).toHaveLength(4)
      expect(card.children[0].children[3].children).toHaveLength(1)
      expect(screen.getByRole('checkbox')).not.toHaveAttribute(
        'aria-describedby',
      )
    },
  )

  it('renders no text column or name reference when the label is empty', () => {
    render(<CheckboxCard label="" aria-label="Accept" />)

    const checkbox = screen.getByRole('checkbox', { name: 'Accept' })
    expect(checkbox).not.toHaveAttribute('aria-labelledby')
    expect(checkbox.parentElement?.children).toHaveLength(3)
  })

  it('renders a 0 label', () => {
    render(<CheckboxCard label={0} />)

    expect(screen.getByRole('checkbox', { name: '0' })).toBeInTheDocument()
  })

  it('uses the default and notice backgrounds', () => {
    render(
      <>
        <CheckboxCard label="Default" />
        <CheckboxCard label="Notice" variant="notice" />
      </>,
    )

    expect(getCard('Default')).toHaveStyleRule('background-color', '#f1e9dc')
    expect(getCard('Notice')).toHaveStyleRule('background-color', '#fcf0d0')
  })

  it('shows the invalid state and its message', () => {
    const { container } = render(
      <CheckboxCard
        label="I agree"
        variant="notice"
        error
        errorMsg="Confirm that you agree"
      />,
    )

    const checkbox = screen.getByRole('checkbox', { name: 'I agree' })
    expect(checkbox).toBeInvalid()
    expect(checkbox).toHaveAccessibleDescription('Confirm that you agree')
    expect(getCard('I agree')).toHaveStyleRule('background-color', '#f5cfcc')
    expect(container).toMatchSnapshot()
  })

  it('hides the message when the card is not invalid', () => {
    render(<CheckboxCard label="I agree" errorMsg="Confirm that you agree" />)

    expect(screen.queryByText('Confirm that you agree')).not.toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeValid()
  })

  it('shows the valid state, with invalid taking priority', () => {
    render(
      <>
        <CheckboxCard label="Valid" variant="notice" valid />
        <CheckboxCard label="Both" variant="notice" valid error />
      </>,
    )

    expect(getCard('Valid')).toHaveStyleRule('background-color', '#c9e2ce')
    expect(screen.getByRole('checkbox', { name: 'Valid' })).toBeValid()
    expect(getCard('Both')).toHaveStyleRule('background-color', '#f5cfcc')
    expect(screen.getByRole('checkbox', { name: 'Both' })).toBeInvalid()
  })

  it('puts the className and margin on the root, not on the input', () => {
    const { container } = render(
      <CheckboxCard label="Illness" className="custom" mt="space.200" />,
    )

    expect(container.firstChild).toHaveClass('custom')
    expect(container.firstChild).toHaveStyleRule('margin-top', '16px', {
      media: '(min-width: 0px)',
    })
    expect(screen.getByRole('checkbox')).not.toHaveClass('custom')
  })
})

describe('CheckboxCardGroup', () => {
  it('renders the cards in a group named by its label', () => {
    const { container } = render(
      <CheckboxCardGroup
        label="What applies to you?"
        assistiveText="Select all that apply"
      >
        <CheckboxCard label="Bereavement" />
        <CheckboxCard label="Illness" />
      </CheckboxCardGroup>,
    )

    expect(
      screen.getByRole('group', { name: 'What applies to you?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('group', { name: 'What applies to you?' }),
    ).toHaveAccessibleDescription('Select all that apply')
    expect(screen.getAllByRole('checkbox')).toHaveLength(2)
    expect(container).toMatchSnapshot()
  })

  it('renders the label as a small group label', () => {
    render(
      <CheckboxCardGroup label="Circumstances" renderAsTitle={false}>
        <CheckboxCard label="Bereavement" />
      </CheckboxCardGroup>,
    )

    expect(
      screen.getByRole('group', { name: 'Circumstances' }),
    ).toBeInTheDocument()
  })

  it('marks every card invalid and shows one message', () => {
    const { container } = render(
      <CheckboxCardGroup
        label="What applies to you?"
        error
        errorMsg="Choose at least one option"
      >
        <CheckboxCard label="Bereavement" />
        <CheckboxCard label="Illness" description="Physical or mental" />
      </CheckboxCardGroup>,
    )

    expect(screen.getAllByText('Choose at least one option')).toHaveLength(1)
    expect(screen.getByRole('checkbox', { name: 'Bereavement' })).toBeInvalid()
    expect(
      screen.getByRole('checkbox', { name: 'Bereavement' }),
    ).toHaveAccessibleDescription('Choose at least one option')
    expect(
      screen.getByRole('checkbox', { name: 'Illness' }),
    ).toHaveAccessibleDescription(
      'Physical or mental Choose at least one option',
    )
    expect(container).toMatchSnapshot()
  })

  it('lets a card opt out of the group error', () => {
    render(
      <CheckboxCardGroup error errorMsg="Choose at least one option">
        <CheckboxCard label="Bereavement" />
        <CheckboxCard label="Illness" error={false} />
      </CheckboxCardGroup>,
    )

    const optedOut = screen.getByRole('checkbox', { name: 'Illness' })
    expect(optedOut).toBeValid()
    expect(optedOut).not.toHaveAttribute('aria-describedby')
  })

  it('shows no message when the group is not invalid', () => {
    render(
      <CheckboxCardGroup errorMsg="Choose at least one option">
        <CheckboxCard label="Bereavement" />
      </CheckboxCardGroup>,
    )

    expect(
      screen.queryByText('Choose at least one option'),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeValid()
  })
})
