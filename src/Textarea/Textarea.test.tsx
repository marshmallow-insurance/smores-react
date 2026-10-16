import { render, screen } from '../testUtils'
import { Textarea } from './Textarea'
import { noop } from '../utils/noop'

describe('Textarea', () => {
  it('renders correctly with required props', () => {
    const { baseElement } = render(
      <Textarea value="Textarea label" onChange={noop} />,
    )

    expect(baseElement).toMatchSnapshot()

    expect(screen.getByText('Textarea label')).toBeTruthy()
  })

  it('describes the textarea with its help and error text', () => {
    render(
      <Textarea
        label="Notes"
        value=""
        onChange={noop}
        required
        error
        errorMsg="Add some notes"
        assistiveText="Keep it short"
      />,
    )
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(textarea).toHaveAttribute('aria-required', 'true')
    const describedBy =
      textarea.getAttribute('aria-describedby')?.split(' ') ?? []
    expect(
      describedBy.map((id) => document.getElementById(id)?.textContent),
    ).toEqual(['Keep it short', 'Add some notes'])
  })

  it('shows a focus ring only for keyboard focus', () => {
    render(<Textarea label="Notes" value="" onChange={noop} />)
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveStyleRule(
      'outline',
      expect.stringContaining('2px'),
      {
        modifier: ':focus-visible:not([data-pointer-focus])',
      },
    )
  })
})
