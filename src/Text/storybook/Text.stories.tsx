import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Text, Typo } from '../Text'
import { fontStyleMapping } from '../fontMapping'

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 1fr;
  margin-bottom: 24px;
  gap: 10px;
`

const TypoCollection = ({
  typos,
}: {
  typos: Readonly<Typo[]> | Readonly<string[]>
}) => {
  return (
    <Box>
      <Grid>
        <Text tag="p" typo="body-regular">
          Name
        </Text>
        <Text tag="p" typo="body-regular">
          Single Line
        </Text>
        <Text tag="p" typo="body-regular">
          Paragraph
        </Text>
      </Grid>
      {typos.map((typo) => (
        <Grid key={typo}>
          <Text tag="p" typo="body-regular" color="sesame">
            {typo}
          </Text>
          <Text tag="p" typo="body-regular" color="liquorice">
            They waited patiently for what seemed a very long time.
          </Text>
          {!['hero-alternate', 'hero', 'heading-alternate', 'label'].includes(
            typo,
          ) && (
            <Text tag="p" typo="body-regular" color="liquorice">
              They waited patiently for what seemed a very long time. They
              waited patiently for what seemed a very long time.
            </Text>
          )}
        </Grid>
      ))}
    </Box>
  )
}

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Text>

const typos = Object.keys(fontStyleMapping)

export const Default: Story = {
  args: {
    tag: 'p',
  },
  render: (args) => (
    <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
  ),
}

export const Label: Story = {
  args: {
    tag: 'label',
    typo: 'label',
    color: 'liquorice',
  },
  render: (args) => (
    <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
  ),
}

export const WithTitle: Story = {
  args: {
    tag: 'p',
    title: 'a11y title tooltip',
  },
  render: (args) => (
    <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
  ),
}

export const Collection: Story = {
  render: () => <TypoCollection typos={typos} />,
}
