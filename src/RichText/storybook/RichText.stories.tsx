import { Meta, StoryObj } from '@storybook/react-vite'
import { RichText, RichTextProps } from '../RichText'

const meta: Meta<RichTextProps> = {
  title: 'RichText',
  component: RichText,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<RichTextProps>

export const Default: Story = {
  args: {
    htmlString:
      '<h1>Header</h1><h2>Subheader</h2><p>A paragraph of text with a <a href="https://liamp.uk">link</a></p>',
  },
}

export const Email: StoryObj = {
  args: {
    htmlString:
      '<div dir="ltr"><div>Testing some features of the rich text viewer. This is an example of an email sent from gmail.<br></div><div><ul><li style="margin-left:15px">bullet</li><li style="margin-left:15px">points<br></li></ul><div><ol><li style="margin-left:15px">numbered</li><li style="margin-left:15px">list</li></ol><div><font size="4">Different</font> <b><i>text</i></b> <u style="background-color:rgb(200,200,0)">formatting</u></div></div></div><div><br></div><span class="gmail_signature_prefix">-- </span><br><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><span style="color:rgb(100,100,100);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif"><font size="4"><b>Liam Piesley</b></font></span><div style="color:rgb(100,100,100);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:12.8px"><div>Software Engineer</div><div>Marshmallow</div><div><a href="http://www.marshmallow.com/" rel="noreferrer" style="color:rgb(17,85,204)" target="_blank">www.marshmallow.com</a></div><div><br></div><div><img src="https://i.imgur.com/psgAauI.png" alt="marshmallow-logo" width="200" height="39" style="height: 39px;"><br></div></div></div></div></div>\r\n',
  },
}

export const AllElements: StoryObj = {
  args: {
    htmlString: `
        <h1>H1 Header</h1>
        <h2>H2 Header</h2>
        <h3>H3 Header</h3>
        <h4>H4 Header</h4>
        <h5>H5 Header</h5>
        <h6>H6 Header</h6>
        <hr />
        <h3>Image</h3>
        <img src="https://www.gstatic.com/webp/gallery/1.sm.webp" alt="mountain-img" />
        <h3>Paragraph</h3>
        <p>Paragraph of text with <b>bold text</b>, <i>italic text</i>, <u>underlined text</u> and a  <a href='https://liamp.uk'>link</a>
        <h3>List</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <h3>Table</h3>
        <table style="border-collapse: collapse;">
          <tr>
            <th style="padding: 8px; border: 1px solid black;">heading 1</th>
            <th style="padding: 8px; border: 1px solid black;">heading 2</th>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid black;">cell 1</td>
            <td style="padding: 8px; border: 1px solid black;">cell 2</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid black;">cell 3</td>
            <td style="padding: 8px; border: 1px solid black;">cell 4</td>
          </tr>
        </table>
        <h3>Dangerous html</h3>
        <p><a href='javascript:alert(0)'>sanitised string with dangerous javascript</a></p>
      `,
  },
}
