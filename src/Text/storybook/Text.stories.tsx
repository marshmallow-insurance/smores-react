import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Text } from '../Text'
import { colourOptions } from '../../utils/storybookHelpers/colourOptions'
import { fontOptions } from '../../utils/storybookHelpers/fontOptions'
import { TypoTypes } from '../../ThemeProvider/utils/fontMap'

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 1fr;
  margin-bottom: 24px;
  gap: 10px;
`

const TypoCollection = ({ typos }: { typos: Readonly<TypoTypes[]> }) => {
  const orderOfTypoTypes = [
    'hero',
    'heading',
    'body',
    'link',
    'label',
    'caption',
  ]
  const orderedTypos = typos.toSorted((a, b) => {
    const aType = orderOfTypoTypes.findIndex((type) => a.includes(type))
    const bType = orderOfTypoTypes.findIndex((type) => b.includes(type))
    if (aType === bType) {
      return b.localeCompare(a)
    }
    return aType - bType
  })

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
      {orderedTypos.map((typo) => (
        <Grid key={typo}>
          <Text tag="p" typo="font.body.200" color="color.text.subtle">
            {typo}
          </Text>
          <Text tag="p" typo={typo} color="color.text.base">
            They waited patiently for what seemed a very long time.
          </Text>
          {!['hero-alternate', 'hero', 'heading-alternate', 'label'].includes(
            typo,
          ) &&
            ![
              'font.hero.100',
              'font.hero.200',
              'font.hero.300',
              'font.label.100',
              'font.label.200',
            ].includes(typo) && (
              <Text tag="p" typo={typo} color="color.text.base">
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
  argTypes: {
    color: {
      control: 'select',
      options: colourOptions,
    },
  },
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

const typos = fontOptions as TypoTypes[]

export const Default: Story = {
  args: {
    tag: 'p',
  },
  argTypes: {
    typo: {
      control: 'select',
      options: fontOptions,
    },
  },
  render: (args) => (
    <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
  ),
}

export const Label: Story = {
  args: {
    tag: 'label',
    typo: 'label',
    color: 'color.text.base',
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
