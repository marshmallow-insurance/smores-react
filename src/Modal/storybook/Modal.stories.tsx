import { Modal } from '../Modal'
import { Container } from './Container'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    handleClick: { action: 'Callback - `handleClick`' },
    rightPanel: {
      type: { name: 'ReactNode' },
      description:
        'Pass react nodes to display on the right side of the modal before the close button',
    },
  },
}

export const Interactive = Container.bind({})

Interactive.args = {
  icon: 'calendar',
  title: "Hello world i'm a beautiful modal",
  showModal: false,
  drawer: true,
  cross: true,
  closeOnOverlayClick: false,
}
