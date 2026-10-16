import { expect, it } from 'vitest'
import { faLock } from '@awesome.me/kit-46ca99185c/icons/classic/solid'
import { render, screen } from '../testUtils'
import { Button } from '../Button'
import { ButtonContainer } from './ButtonContainer'

const supportingText = "This won't impact your credit score"

describe('ButtonContainer', () => {
  it('renders both buttons and the supporting text', () => {
    const { container } = render(
      <ButtonContainer
        primaryButton={<Button primary>Continue</Button>}
        secondaryButton={<Button secondary>Back</Button>}
        supportingMessage={{ text: supportingText, icon: faLock }}
      />,
    )

    expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument()
    expect(screen.getByText(supportingText)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('describes only the primary button with the supporting text', () => {
    render(
      <ButtonContainer
        primaryButton={<Button primary>Continue</Button>}
        secondaryButton={<Button secondary>Back</Button>}
        supportingMessage={{ text: supportingText }}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).toHaveAccessibleDescription(supportingText)
    expect(screen.getByRole('button', { name: 'Back' })).not.toHaveAttribute(
      'aria-describedby',
    )
  })

  it('keeps an existing aria-describedby on the primary button', () => {
    render(
      <>
        <p id="existing-description">Step 2 of 3</p>
        <ButtonContainer
          primaryButton={
            <Button primary aria-describedby="existing-description">
              Continue
            </Button>
          }
          supportingMessage={{ text: supportingText }}
        />
      </>,
    )

    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).toHaveAccessibleDescription(`Step 2 of 3 ${supportingText}`)
  })

  it('does not add aria-describedby without supporting text', () => {
    render(
      <ButtonContainer primaryButton={<Button primary>Continue</Button>} />,
    )

    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).not.toHaveAttribute('aria-describedby')
  })

  it('renders supporting text without an icon when none is given', () => {
    const { container } = render(
      <ButtonContainer
        primaryButton={<Button primary>Continue</Button>}
        supportingMessage={{ text: supportingText }}
      />,
    )

    expect(screen.getByText(supportingText)).toBeInTheDocument()
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

  it('hides the supporting icon from assistive technology', () => {
    const { container } = render(
      <ButtonContainer
        primaryButton={<Button primary>Continue</Button>}
        supportingMessage={{ text: supportingText, icon: faLock }}
      />,
    )

    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })

  it('keeps the icon inline inside the supporting text so it hugs the first line', () => {
    const { container } = render(
      <ButtonContainer
        primaryButton={<Button primary>Continue</Button>}
        supportingMessage={{ text: supportingText, icon: faLock }}
      />,
    )

    expect(screen.getByText(supportingText)).toContainElement(
      container.querySelector('svg'),
    )
  })

  it.each([
    ['empty', ''],
    ['whitespace-only', '  \n '],
  ])('renders nothing for a supporting message with %s text', (_, text) => {
    const { container } = render(
      <ButtonContainer
        primaryButton={<Button primary>Continue</Button>}
        supportingMessage={{ text, icon: faLock }}
      />,
    )

    expect(container.querySelector('p')).not.toBeInTheDocument()
    expect(container.querySelector('svg')).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).not.toHaveAttribute('aria-describedby')
  })

  it('keeps its padding inside the full width without a CSS reset', () => {
    const { container } = render(
      <ButtonContainer primaryButton={<Button primary>Continue</Button>} />,
    )

    expect(container.children[1]).toHaveStyleRule('box-sizing', 'border-box')
  })

  it('renders a spacer only when pinned', () => {
    const { container, rerender } = render(
      <ButtonContainer primaryButton={<Button primary>Continue</Button>} />,
    )
    expect(container.children).toHaveLength(2)

    rerender(
      <ButtonContainer
        primaryButton={<Button primary>Continue</Button>}
        pinned={false}
      />,
    )
    expect(container.children).toHaveLength(1)
  })
  it('orders buttons primary, secondary, tertiary when vertical', () => {
    render(
      <ButtonContainer
        primaryButton={<Button primary>Continue</Button>}
        secondaryButton={<Button secondary>Back</Button>}
        tertiaryButton={<Button tertiary>Skip</Button>}
      />,
    )

    expect(
      screen.getAllByRole('button').map((button) => button.textContent),
    ).toEqual(['Continue', 'Back', 'Skip'])
  })

  it('orders buttons tertiary, secondary, primary when horizontal', () => {
    render(
      <ButtonContainer
        orientation="horizontal"
        primaryButton={<Button primary>Continue</Button>}
        secondaryButton={<Button secondary>Back</Button>}
        tertiaryButton={<Button tertiary>Skip</Button>}
        supportingMessage={{ text: supportingText }}
      />,
    )

    expect(
      screen.getAllByRole('button').map((button) => button.textContent),
    ).toEqual(['Skip', 'Back', 'Continue'])
    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).toHaveAccessibleDescription(supportingText)
    expect(screen.getByRole('button', { name: 'Skip' })).not.toHaveAttribute(
      'aria-describedby',
    )
  })

  it('centres the buttons on desktop by default', () => {
    const { container } = render(
      <ButtonContainer primaryButton={<Button primary>Continue</Button>} />,
    )

    expect(container.children[1].firstElementChild).toHaveStyleRule(
      'justify-content',
      'center',
      { media: '(min-width: 768px)' },
    )
  })

  it('aligns vertical buttons and supporting text to the start on desktop', () => {
    render(
      <ButtonContainer
        align="start"
        primaryButton={<Button primary>Continue</Button>}
        supportingMessage={{ text: "This won't impact your credit score" }}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Continue' }).parentElement,
    ).toHaveStyleRule('justify-content', 'start', {
      media: '(min-width: 768px)',
    })
    expect(
      screen.getByText("This won't impact your credit score"),
    ).toHaveStyleRule('text-align', 'start', { media: '(min-width: 768px)' })
  })

  it('drops the auto margin from horizontal buttons aligned to the start on desktop', () => {
    render(
      <ButtonContainer
        align="start"
        orientation="horizontal"
        primaryButton={<Button primary>Continue</Button>}
        secondaryButton={<Button secondary>Back</Button>}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Continue' }).parentElement,
    ).toHaveStyleRule('margin', '0', { media: '(min-width: 768px)' })
  })
})
