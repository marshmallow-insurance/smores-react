import React from 'react'
import { Modal } from '../Modal'

export default {
  title: 'Modal'
}

const Template = (args) => <Modal {...args}>Get started</Modal>

export const Default = Template.bind({})

Default.args = {
  title: "Hello world i'm a beautiful modal",
  body: "[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application."
}