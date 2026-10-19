import { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Box } from '../../Box'
import { Text } from '../../Text'
import {
  ScrollingModal,
  scrollModalToBottom,
} from '../../utils/storybookHelpers/ScrollingModal'
import { SearchInput } from '../SearchInput'
import { industries } from './industries'
import { occupations } from './occupations'
import { searchList } from './searchList'

type Story = StoryObj<typeof SearchInput>

const meta: Meta<typeof SearchInput> = {
  title: 'Search Input',
  component: SearchInput,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Search label',
    showIcon: false,
    renderAsTitle: false,
    resultsRelativePosition: false,
    resultsBorder: true,
    enableFuzzySearch: false,
    searchList: searchList,
    name: 'search_input',
    className: '',
    onNotFound: undefined,
    notFoundComponent: undefined,
  },
}

export default meta

export const ResultsOpen: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('combobox')
    await userEvent.click(input)
    await userEvent.keyboard('{ArrowDown}')
    await expect(canvas.getByRole('listbox')).toBeVisible()
    await expect(input).toHaveAttribute('aria-expanded', 'true')
    await expect(input).toHaveAttribute('aria-activedescendant')
  },
}

/**
 * The results are positioned with `position: fixed`, so a scrolling Modal does
 * not clip them. Here the input is at the bottom of the modal, so they open
 * above it.
 */
export const InsideScrollingModal: Story = {
  args: { onFound: fn() },
  render: (args) => (
    <ScrollingModal>
      <SearchInput {...args} />
    </ScrollingModal>
  ),
  play: async ({ args }) => {
    const body = within(document.body)
    const input = await body.findByRole('combobox')
    await scrollModalToBottom(input)
    await userEvent.click(input)
    const listbox = await body.findByRole('listbox')

    // Wait for the results to be positioned above the input
    await waitFor(() =>
      expect(listbox.getBoundingClientRect().bottom).toBeLessThanOrEqual(
        input.getBoundingClientRect().top,
      ),
    )
    const rect = listbox.getBoundingClientRect()
    await expect(rect.top).toBeGreaterThanOrEqual(0)
    await expect(rect.width).toBe(input.getBoundingClientRect().width)

    // Nothing clips the results, so the one at the centre is what is on top
    const middle = document.elementFromPoint(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    )
    await expect(listbox).toContainElement(middle as HTMLElement)

    // Narrowing the results keeps them above the input, next to it
    await userEvent.type(input, 'Banana')
    await expect(body.getAllByRole('option')).toHaveLength(1)
    await waitFor(() => {
      const narrowed = body.getByRole('listbox').getBoundingClientRect()
      const inputTop = input.getBoundingClientRect().top
      expect(narrowed.bottom).toBeLessThanOrEqual(inputTop)
      expect(inputTop - narrowed.bottom).toBeLessThan(10)
    })

    // Escape closes the results first and then the modal
    await userEvent.keyboard('{Escape}')
    await expect(body.queryByRole('listbox')).not.toBeInTheDocument()
    await expect(body.getByRole('dialog')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await expect(body.queryByRole('dialog')).not.toBeInTheDocument()
    await expect(args.onFound).not.toHaveBeenCalled()
  },
}

export const NoResults: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByRole('combobox'), 'zzzz')
    await expect(canvas.getByRole('status')).toHaveTextContent('No results')
  },
}

export const OnNotFoundFunction: Story = {
  args: {
    onNotFound: (searchTerm: string) =>
      alert(`Could not find value for ${searchTerm}`),
  },
}

export const NotFoundComponent: Story = {
  args: {
    notFoundComponent: () => <div>Custom not found component</div>,
  },
}

const allFuzzySearchOptions = {
  findAllMatches: true,
  minMatchCharLength: 1,
  location: 0,
  threshold: 0.45,
  distance: 55,
}

export const Occupations: Story = {
  args: {
    enableFuzzySearch: true,
    assistiveText: 'I am assisting',
    fuzzySearchOptions: allFuzzySearchOptions,
    clearSearch: true,
    searchList: occupations.map(({ name, value }) => ({ label: name, value })),
    onFound: (searchTerm: string) => console.log(`selected ${searchTerm}`),
    notFoundComponent: (searchTerm: string) => (
      <Box>
        <Text typo="headline-regular">No matches for {`'${searchTerm}'`}.</Text>
        <Text mt="space.100">
          {`It might be listed differently. For example, if you're a "PR
          Consultant", try "Public Relations Officer" instead.`}
        </Text>
      </Box>
    ),
  },
  argTypes: {
    searchList: { control: false },
    label: { control: false },
    renderAsTitle: { control: false },
    onBlur: { control: false },
    onFound: { control: false },
    onNotFound: { control: false },
    notFoundComponent: { control: false },
    name: { control: false },
    showIcon: { control: false },
    resultsRelativePosition: { control: false },
    resultsBorder: { control: false },
    enableFuzzySearch: { control: false },
    className: { control: false },
    fuzzySearchOptions: {
      control: 'object',
    },
  },
}

export const Industries: Story = {
  args: {
    ...Occupations.args,
    searchList: industries.map(({ name, value }) => ({ label: name, value })),
    notFoundComponent: (searchTerm: string) => (
      <Box>
        <Text typo="headline-regular">No matches for {`'${searchTerm}'`}.</Text>
        <Text mt="space.100">
          {`Sometimes we use different terms. If you're in "Medical services," try "Healthcare."`}
        </Text>
      </Box>
    ),
  },
  argTypes: {
    ...Occupations.argTypes,
  },
}
