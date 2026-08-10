import { Meta, StoryObj } from '@storybook/react-vite'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Text } from '../../Text'
import { Modal, ModalProps } from '../Modal'
import { noop } from '../../utils/noop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsMaximize } from '@awesome.me/kit-46ca99185c/icons/classic/regular'

const StyledBox = styled(Box)<{ height: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height};
  transition: height 0.3s ease-in-out;
`

const Container: FC<ModalProps> = (props) => {
  const [showModal, setShowModal] = useState(props.showModal ?? false)
  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Modal {...props} showModal={showModal} handleClick={handleClick}>
        {props.children}
      </Modal>
      <Button primary onClick={handleClick}>
        Show modal
      </Button>
    </>
  )
}

const LongContent = () => (
  <Box flex direction="column" gap="space.200">
    {Array.from({ length: 12 }).map((_, index) => (
      <Text key={index}>
        Paragraph {index + 1}: No Claims Discount (NCD) is the UK system that
        recognises claim-free drivers by giving them a discount. So the more
        years you drive without making a claim, the bigger your discount will
        be.
      </Text>
    ))}
  </Box>
)

const TwoButtonFooterContent = (
  <>
    <Button secondary handleClick={noop}>
      Find out more
    </Button>
    <Button primary handleClick={noop}>
      Got it
    </Button>
  </>
)

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['!autodocs'],
  argTypes: {
    rightPanel: {
      description:
        'Pass react nodes to display on the right side of the modal before the close button',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    title: 'Generic modal',
    showModal: true,
  },
  render: (args) => {
    return (
      <Container {...args}>
        <Box>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </Box>
      </Container>
    )
  },
}

export const Interactive: Story = {
  args: {
    icon: 'calendar',
    title: "Hello world i'm a beautiful modal",
    showModal: false,
    drawer: true,
    cross: true,
    closeOnOverlayClick: false,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expanded, setExpanded] = useState(false)
    const rightPanel = (
      <Box onClick={() => setExpanded((current) => !current)}>
        <FontAwesomeIcon icon={faArrowsMaximize} />
      </Box>
    )

    return (
      <Container
        rightPanel={rightPanel}
        width={expanded ? '500px' : '300px'}
        {...args}
      >
        <StyledBox height={expanded ? '500px' : '200px'}>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </StyledBox>
      </Container>
    )
  },
}

export const BasicContentModal: Story = {
  args: {
    title: 'Title of content',
    showModal: true,
  },
  render: (args) => (
    <Container {...args}>
      <Text>
        No Claims Discount (NCD) is the UK system that recognises claim-free
        drivers by giving them a discount. So the more years you drive without
        making a claim, the bigger your discount will be.
      </Text>
    </Container>
  ),
}

export const CustomContentModal: Story = {
  args: {
    title: 'Title of content',
    showModal: true,
  },
  render: (args) => (
    <Container {...args}>
      <Box flex direction="column" gap="space.200">
        <Box
          style={{
            height: '160px',
            borderRadius: '12px',
            background: '#EDE7DE',
          }}
        />
        <Text>
          No Claims Discount (NCD) is the UK system that recognises claim-free
          drivers by giving them a discount. Outside the UK, this system is
          often called Bonus Malus. And we accept them all!
        </Text>
      </Box>
    </Container>
  ),
}

export const SingleButtonFooter: Story = {
  args: {
    title: 'Title of content',
    showModal: false,
    footer: (
      <Button primary handleClick={noop}>
        Got it
      </Button>
    ),
  },
  render: (args) => (
    <Container {...args}>
      <Text>
        No Claims Discount (NCD) is the UK system that recognises claim-free
        drivers by giving them a discount.
      </Text>
    </Container>
  ),
}

export const TwoButtonFooter: Story = {
  args: {
    title: 'Title of content',
    showModal: true,
    footer: TwoButtonFooterContent,
  },
  render: (args) => (
    <Container {...args}>
      <Text>
        No Claims Discount (NCD) is the UK system that recognises claim-free
        drivers by giving them a discount.
      </Text>
    </Container>
  ),
}

export const StickyHeader: Story = {
  args: {
    title: 'Title of content',
    showModal: true,
    stickyHeader: true,
  },
  render: (args) => (
    <Container {...args}>
      <LongContent />
    </Container>
  ),
}

export const StickyFooter: Story = {
  args: {
    title: 'Title of content',
    showModal: true,
    stickyFooter: true,
    footer: TwoButtonFooterContent,
  },
  render: (args) => (
    <Container {...args}>
      <LongContent />
    </Container>
  ),
}

export const StickyHeaderAndFooter: Story = {
  args: {
    title: 'Title of content',
    showModal: true,
    stickyHeader: true,
    stickyFooter: true,
    footer: TwoButtonFooterContent,
  },
  render: (args) => (
    <Container {...args}>
      <LongContent />
    </Container>
  ),
}

export const MobileDrawer: Story = {
  args: {
    title: 'Title of content',
    showModal: true,
    drawer: true,
    stickyHeader: true,
    stickyFooter: true,
    footer: TwoButtonFooterContent,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Same recommended sticky configuration as above — `drawer` (on by default) turns this into a bottom-sheet on narrow screens. Resize your browser below 768px to see the drawer treatment take effect.',
      },
    },
  },
  render: (args) => (
    <Container {...args}>
      <LongContent />
    </Container>
  ),
}
