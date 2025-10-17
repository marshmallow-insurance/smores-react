import React from 'react'
import styled, { useTheme } from 'styled-components'

import { colourOptions } from './utils/storybookHelpers/colourOptions'

import { Box } from './Box'
import { Divider } from './Divider'
import { Text } from './Text'
import { NewColor, resolveToThemeColor } from './ThemeProvider/utils/colourMap'

const extractColorSections = () => {
  const sections: { title: string; colors: NewColor[] }[] = []

  const generatePrefix = (color: string) => {
    if (color.startsWith('color')) {
      return color.split('.').slice(0, 2).join('.')
    } else {
      return color.split('.').slice(0, 1).join('.')
    }
  }

  const prefixes = new Set(colourOptions.map((color) => generatePrefix(color)))

  prefixes.forEach((prefix) => {
    const title = prefix
      .split('.')
      .slice(0)
      .join(' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
    const colors = colourOptions.filter((color) =>
      color.startsWith(prefix),
    ) as NewColor[]
    sections.push({ title, colors })
  })

  return sections
}

const ColorCard = ({ colorName }: { colorName: NewColor }) => {
  const theme = useTheme()
  const resolvedColor = resolveToThemeColor(colorName, theme)

  return (
    <ColorCardWrapper width="260px">
      <ColorBox $colorName={colorName} width="100%" pt={{ custom: '50%' }} />
      <Divider />
      <Box px="16px" py={{ custom: 4 }} flex direction="column">
        <Text tag="span" typo="body-regular">
          {colorName}
        </Text>
        <Text tag="span" typo="caption" color="sesame">
          {resolvedColor.toUpperCase()}
        </Text>
      </Box>
    </ColorCardWrapper>
  )
}

const ColorSection = ({
  title,
  colors,
}: {
  title: string
  colors: Readonly<NewColor[]>
}) => {
  return (
    <Box width="100%">
      <Box mb="16px">
        <Text tag="span" typo="headline-small">
          {title}
        </Text>
      </Box>
      <ColorList>
        {colors.map((colorName) => (
          <ColorCard key={colorName} colorName={colorName} />
        ))}
      </ColorList>
    </Box>
  )
}

const ColorsPage = () => {
  return (
    <PageWrapper>
      {extractColorSections().map((section) => (
        <ColorSection
          key={section.title}
          title={section.title}
          colors={section.colors}
        />
      ))}
    </PageWrapper>
  )
}

export default {
  title: 'Foundation/Design System Colors',
  components: ColorsPage,
}

const Template = () => <ColorsPage />

export const List = Template.bind({})

const ColorList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
`

const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const ColorCardWrapper = styled(Box)`
  background-color: ${({ theme }) => theme.color.surface.base['000']};
  border: 1px solid ${({ theme }) => theme.color.feedback.inactive[100]};
  border-radius: 8px;
  overflow: hidden;
`

const ColorBox = styled(Box)<{ $colorName: string }>`
  background-color: ${({ $colorName, theme }) =>
    resolveToThemeColor($colorName as NewColor, theme)};
`
