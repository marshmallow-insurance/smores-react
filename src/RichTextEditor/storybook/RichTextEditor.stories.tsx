import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react';
import { RichTextEditor, RichTextEditorProps } from '../RichTextEditor'

const meta: Meta<RichTextEditorProps> = {
  title: 'RichTextEditor',
  component: RichTextEditor,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}

export default meta

type Story = StoryObj<RichTextEditorProps>

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, setValue] = useState(args.defaultValue)

    return (
      <RichTextEditor
        {...args}
        defaultValue={args.defaultValue}
        onChange={(e) => setValue(e)}
      />
    )
  },
  args: {
    defaultValue:
      '<h1>Header</h1><h2>Subheading</h2><p>A paragraph of text with a <a href="https://liamp.uk">link</a></p>',
    height: '300px',
    maxHeight: '300px',
  },
  parameters: {
    a11y: {
      disable: true,
    },
  },
}

export const Email: Story = {
  args: {
    defaultValue: `<div dir="ltr"><div>Testing some features of the rich text viewer. This is an example of an email sent from gmail.<br></div><div><ul><li style="margin-left:15px">bullet</li><li style="margin-left:15px">points<br></li></ul><div><ol><li style="margin-left:15px">numbered</li><li style="margin-left:15px">list</li></ol><div><font size="4">Different</font><b><i>text</i></b><u style="background-color:rgb(0,255,255)">formatting</u></div></div></div><div><br></div><span class="gmail_signature_prefix">-- </span><br><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><span style="color:rgb(136,136,136);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif"><font size="4"><b>Liam Piesley</b></font></span><div style="color:rgb(136,136,136);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:12.8px"><div>Software Engineer</div><div>Marshmallow</div><div><a href="http://www.marshmallow.com/" rel="noreferrer" style="color:rgb(17,85,204)" target="_blank">www.marshmallow.com</a></div><div><br></div><div><img src="https://i.imgur.com/psgAauI.png" width="200" height="39"><br></div></div></div></div></div>rn`,
  },
  parameters: {
    a11y: {
      disable: true,
    },
  },
}

export const NoDefaultValue: Story = {
  args: {},
  parameters: {
    a11y: {
      disable: true,
    },
  },
}

export const SmallEditor: Story = {
  args: {
    defaultValue: `<p>small</p>`,
    height: '84px',
  },
  parameters: {
    a11y: {
      disable: true,
    },
  },
}
