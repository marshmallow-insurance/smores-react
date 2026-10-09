import { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArgTypes,
  Controls,
  Heading,
  Markdown,
  Primary,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks'
import { MINIMAL_VIEWPORTS } from 'storybook/viewport'
import { createGlobalStyle } from 'styled-components'
import {
  faBadgeCheck,
  faCircleCheck,
  faCircleInfo,
  faClock,
  faCreditCard,
  faLock,
  faShieldCheck,
} from '@awesome.me/kit-46ca99185c/icons/classic/solid'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Divider } from '../../Divider'
import { Text } from '../../Text'
import { ButtonContainer, ButtonContainerOrientation } from '../ButtonContainer'

/** Mirrors the Figma component properties; mapped to props in `render` */
type StoryArgs = {
  orientation: ButtonContainerOrientation
  showSecondaryButton: boolean
  showTertiaryButton: boolean
  showSupportingText: boolean
  supportingText: string
  showSupportingIcon: boolean
  supportingIcon: keyof typeof supportingIcons
  pinned: boolean
}

// A sample for the Storybook control; any Font Awesome icon can be passed in code
const supportingIcons = {
  lock: faLock,
  'shield-check': faShieldCheck,
  'badge-check': faBadgeCheck,
  'circle-check': faCircleCheck,
  'circle-info': faCircleInfo,
  clock: faClock,
  'credit-card': faCreditCard,
}

const quoteDetails = [
  ['Car price', '£18,500'],
  ['Deposit', '£2,000'],
  ['Loan amount', '£16,500'],
  ['Term', '48 months'],
  ['Representative APR', '9.9%'],
  ['Monthly payment', '£416.22'],
]

const nextSteps = [
  "We'll run a soft search to confirm you're eligible.",
  "You'll choose a lender and check your agreement.",
  'Sign online and the dealer will arrange collection.',
]

const QuotePage = () => (
  <>
    <Text tag="h1" typo="heading-medium" mb="space.100">
      Your finance quote
    </Text>
    <Text color="color.text.subtle" mb="space.300">
      Here's what your monthly payments could look like for the Volkswagen Golf
      you picked.
    </Text>
    {quoteDetails.map(([label, value]) => (
      <Box key={label}>
        <Box flex justifyContent="space-between" py="space.150">
          <Text color="color.text.subtle">{label}</Text>
          <Text typo="headline-regular">{value}</Text>
        </Box>
        <Divider />
      </Box>
    ))}
    <Text tag="h2" typo="heading-small" mt="space.400" mb="space.150">
      What happens next
    </Text>
    <ul style={{ paddingLeft: 20, marginBottom: 24, listStyle: 'disc' }}>
      {nextSteps.map((step) => (
        <Text key={step} tag="li" mb="space.100">
          {step}
        </Text>
      ))}
    </ul>
  </>
)

// The global preview border would frame the page behind the pinned container
const HidePreviewBorder = createGlobalStyle`
  body {
    border: none;
  }
`

const storyUrl = (id: string) => `iframe.html?id=${id}&viewMode=story`

const frameStyle = { border: '1px solid #dad2c4', borderRadius: 16 }

// Docs pages sit outside the story decorators (and theme), so only use docs blocks and plain elements here
const DocsPage = () => (
  <>
    <Title />
    <Markdown>
      {`Pins one to three buttons to the bottom of the screen on mobile, with optional supporting text below them. From 768px up it sits at the end of the content, centred: vertical buttons are up to 400px wide, and horizontal buttons all match the longest label (at least 160px).`}
    </Markdown>
    <Primary />
    <Controls />
    <Heading>Mobile</Heading>
    <iframe
      title="Mobile"
      src={storyUrl('buttoncontainer--mobile')}
      width={375}
      height={667}
      style={frameStyle}
    />
    <Heading>Desktop</Heading>
    <iframe
      title="Desktop"
      src={storyUrl('buttoncontainer--desktop')}
      width="100%"
      height={760}
      style={frameStyle}
    />
    <Heading>Props</Heading>
    <Markdown>
      {`In code, showing a Figma option means passing its prop: the secondary button, tertiary button, supporting text and icon are all optional.`}
    </Markdown>
    <ArgTypes of={ButtonContainer} />
    <Stories />
  </>
)

const meta: Meta<StoryArgs> = {
  title: 'ButtonContainer',
  args: {
    orientation: 'vertical',
    showSecondaryButton: true,
    showTertiaryButton: false,
    showSupportingText: false,
    supportingText: "This won't impact your credit score",
    showSupportingIcon: true,
    supportingIcon: 'lock',
    pinned: true,
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
    },
    showSecondaryButton: { control: 'boolean' },
    showTertiaryButton: { control: 'boolean' },
    showSupportingText: { control: 'boolean' },
    supportingText: {
      control: 'text',
      if: { arg: 'showSupportingText' },
    },
    showSupportingIcon: {
      control: 'boolean',
      if: { arg: 'showSupportingText' },
    },
    supportingIcon: {
      control: 'select',
      options: Object.keys(supportingIcons),
      if: { arg: 'showSupportingText' },
    },
    pinned: { control: 'boolean' },
  },
  render: ({
    orientation,
    showSecondaryButton,
    showTertiaryButton,
    showSupportingText,
    supportingText,
    showSupportingIcon,
    supportingIcon,
    pinned,
  }) => (
    <ButtonContainer
      orientation={orientation}
      pinned={pinned}
      primaryButton={<Button primary>Continue</Button>}
      secondaryButton={
        showSecondaryButton ? <Button secondary>Back</Button> : undefined
      }
      tertiaryButton={
        showTertiaryButton ? <Button tertiary>Skip</Button> : undefined
      }
      supportingMessage={
        showSupportingText
          ? {
              text: supportingText,
              icon: showSupportingIcon
                ? supportingIcons[supportingIcon]
                : undefined,
            }
          : undefined
      }
    />
  ),
  parameters: {
    viewport: {
      options: {
        ...MINIMAL_VIEWPORTS,
        figmaMobile: {
          name: 'Mobile (375px)',
          styles: { width: '375px', height: '667px' },
          type: 'mobile',
        },
      },
    },
    docs: {
      page: DocsPage,
    },
  },
  decorators: [
    (Story, { viewMode }) => (
      <Box
        px="space.200"
        py="space.300"
        maxWidth="720px"
        mx={{ custom: 'auto' }}
        // On the docs page, the transform keeps each pinned container inside its own example
        style={viewMode === 'docs' ? { transform: 'translateZ(0)' } : undefined}
      >
        <HidePreviewBorder />
        <QuotePage />
        <Story />
      </Box>
    ),
  ],
}

export default meta

type Story = StoryObj<StoryArgs>

export const Default: Story = {}

export const WithSupportingText: Story = {
  args: {
    showSupportingText: true,
  },
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
}

export const HorizontalWithTertiaryButton: Story = {
  args: {
    orientation: 'horizontal',
    showTertiaryButton: true,
  },
}

export const Mobile: Story = {
  tags: ['!autodocs'],
  args: {
    showSupportingText: true,
  },
  globals: {
    viewport: { value: 'figmaMobile', isRotated: false },
  },
}

export const Desktop: Story = {
  tags: ['!autodocs'],
  args: {
    showSupportingText: true,
  },
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
}
