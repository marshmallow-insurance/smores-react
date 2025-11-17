import { render } from '../testUtils'
import { ActionDropdown } from './ActionDropdown'
import { ActionListItem } from './List'
import { noop } from '../utils/noop'

const options: ActionListItem[] = [
  {
    label: 'Default grey',
    value: 'DEFAULT',
    bgColor: 'color.surface.base.100',
    textColor: 'color.text.base',
  },
  {
    label: 'Brand',
    value: 'ACTION',
    bgColor: 'color.surface.brand.300',
    textColor: 'color.text.base',
  },
]

describe('ActionDropdown', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <ActionDropdown
        value={{ label: 'Default grey', value: 'DEFAULT' }}
        list={options}
        onSelect={noop}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
