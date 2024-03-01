import React from 'react'

import { RichTextEditor } from '../RichTextEditor'

export const Example = () => {
  return (
    <RichTextEditor
      maxHeight='1000px'
      defaultValue={`
        <h1>H1 Header</h1>
        <h2>H2 Header</h2>
        <h3>H3 Header</h3>
        <h4>H4 Header</h4>
        <h5>H5 Header</h5>
        <h6>H6 Header</h6>
        <hr />
        <h3>Paragraph</h3>
        <p>Paragraph of text with <b>bold text</b>, <i>italic text</i>, <u>underlined text</u> and a  <a href='https://liamp.uk'>link</a>
        <h3>List</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <h3>Dangerous html</h3>
        <p><a href='javascript:alert(0)'>sanitised string with dangerous javascript</a></p>
      `}
      m="16px"
    />
  )
}
