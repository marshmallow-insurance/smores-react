import React, { FC, useState } from 'react'
import { RichTextEditor, RichTextEditorProps } from '../RichTextEditor'
import { CollectionPage } from './Collection'
import { Example } from './Example'

export default {
  title: 'Rich Text Editor',
  component: RichTextEditor,
}

const Template: FC = (props: RichTextEditorProps) => {
  const [, setValue] = useState(props.defaultValue)

  return (
    <RichTextEditor
      {...props}
      defaultValue={props.defaultValue}
      onChange={(e) => setValue(e)}
    />
  )
}

export const Default = Template.bind({})

Default.args = {
  defaultValue:
    '<h1>Header</h1><h2>Subheading</h2><p>A paragraph of text with a <a href="https://liamp.uk">link</a></p>',
  height: '300px',
  maxHeight: '300px',
  outline: true,
}
Default.parameters = {
  a11y: {
    disable: true,
  },
}

export const Collection = CollectionPage.bind({})
Collection.parameters = {
  a11y: {
    disable: true,
  },
}

const WorkingExampleTemplate = () => <Example />

export const WorkingExample = WorkingExampleTemplate.bind({})
WorkingExample.parameters = {
  a11y: {
    disable: true,
  },
}
