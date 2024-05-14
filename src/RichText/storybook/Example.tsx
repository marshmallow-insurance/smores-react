import React from 'react'

import { RichText } from '../RichText'

export const Example = () => {
  return (
    <RichText
      htmlString={`
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
      `}
      m="16px"
    />
  )
}
