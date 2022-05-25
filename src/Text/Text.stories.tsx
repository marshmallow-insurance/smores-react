import React from 'react'
import styled from 'styled-components'
import { Text, TextProps } from './Text'
import { Box } from '../Box'

export default {
  title: 'Text',
  component: Text,
}

const typos = [
  'header-large',
  'header-medium',
  'header-small',
  'desc-heavy',
  'desc-medium',
  'desc-light',
  'desc-small',
  'base',
  'base-small',
  'base-xsmall',
  'label',
  'label-large',
] as const

const Template = (props: TextProps) => (
  <Text {...props}>The quick brown fox jumps over the lazy dog</Text>
)

const TypoCollection = ({ typos }: { typos: Readonly<string[]> }) => {
  return (
    <Box>
      <Grid>
        <Text tag="p" typo="base">
          Name
        </Text>
        <Text tag="p" typo="base">
          Single Line
        </Text>
        <Text tag="p" typo="base">
          Paragraph
        </Text>
      </Grid>
      {typos.map((typo) => (
        <Grid key={typo}>
          <Text tag="p" typo="base" color="subtext">
            {typo}
          </Text>
          <Text tag="p" typo={typo} color="secondary">
            Lorem ipsum dolor sit amet
          </Text>
          {typo !== 'label' && typo !== 'label-large' && (
            <Text tag="p" typo={typo} color="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget scelerisque ante, iaculis sodales lorem.
            </Text>
          )}
        </Grid>
      ))}
    </Box>
  )
}

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 1fr;
  margin-bottom: 24px;
  gap: 10px;
`

const TypographyTemplate = () => <TypoCollection typos={typos} />

export const Default = Template.bind({})

Default.args = {
  tag: 'p',
}

export const Label = Template.bind({})

Label.args = {
  tag: 'label',
  typo: 'label',
  color: 'secondary',
}

export const WithTitle = Template.bind({})

WithTitle.args = {
  tag: 'p',
  title: 'a11y title tooltip',
}

export const TypographyCollection = TypographyTemplate.bind({})
