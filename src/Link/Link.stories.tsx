import React from 'react'
import { Text } from '../Text'

import { Link, LinkProps } from './Link'

export default {
  title: 'Link',
  component: Link,
  argTypes: { onClick: { action: 'clicked' } },
}

const linkArgs = {
  href: 'https://www.google.com',
  openInNewTab: true,
  children: 'Google link',
  typo: 'regular',
}

export const Playground = Link.bind({})
Playground.args = linkArgs

const ParagraphDemo = (props: LinkProps) => (
  <Text tag="p" color="apple">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry,
    more details <Link {...props} />. Lorem Ipsum has been the industrys
    standard dummy text ever since the 1500s.
  </Text>
)

export const InParagraph = ParagraphDemo.bind({})
InParagraph.args = {
  ...linkArgs,
  href: 'https://en.wikipedia.org/wiki/Lorem_ipsum',
  children: 'here',
}
