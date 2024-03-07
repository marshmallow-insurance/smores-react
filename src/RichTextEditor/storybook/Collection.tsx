import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Box } from '../../Box'
import { Text } from '../../Text'
import { RichTextEditor } from '../RichTextEditor'

export const CollectionPage: FC = () => {
  return (
    <Box flex direction="column">
      <Box flex direction="column" mb="32px">
        <Title tag="span" typo="header-medium">
          Rich Text Editor variations
        </Title>
        <Row label="Email">
          <RichTextEditor
            outline
            onChange={(e) => console.log(e)}
            defaultValue={
              `<div dir=\"ltr\"><div>Testing some features of the rich text viewer. This is an example of an email sent from gmail.<br></div><div><ul><li style=\"margin-left:15px\">bullet</li><li style=\"margin-left:15px\">points<br></li></ul><div><ol><li style=\"margin-left:15px\">numbered</li><li style=\"margin-left:15px\">list</li></ol><div><font size=\"4\">Different</font> <b><i>text</i></b> <u style=\"background-color:rgb(0,255,255)\">formatting</u></div></div></div><div><br></div><span class=\"gmail_signature_prefix\">-- </span><br><div dir=\"ltr\" class=\"gmail_signature\" data-smartmail=\"gmail_signature\"><div dir=\"ltr\"><span style=\"color:rgb(136,136,136);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif\"><font size=\"4\"><b>Liam Piesley</b></font></span><div style=\"color:rgb(136,136,136);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:12.8px\"><div>Software Engineer</div><div>Marshmallow</div><div><a href=\"http://www.marshmallow.com/\" rel=\"noreferrer\" style=\"color:rgb(17,85,204)\" target=\"_blank\">www.marshmallow.com</a></div><div><br></div><div><img src=\"https://i.imgur.com/psgAauI.png\" width=\"200\" height=\"39\"><br></div></div></div></div></div>\r\n`
            }
          />
        </Row>
        <Row label="Small Editor">
          <RichTextEditor
            onChange={(e) => console.log(e)}
            defaultValue={
              `<p>small</p>`
            }
            height="84px"
          />
        </Row>
        <Row label="No default value">
          <RichTextEditor
            onChange={(e) => console.log(e)}
          />
        </Row>
      </Box>
    </Box>
  )
}

const Row: FC<{ label: string; children?: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <RowWrapper mt="32px">
      <Box width="140px">
        <Text tag="span" typo="label-large">
          {label}
        </Text>
      </Box>
      <Children>
      {children}
      </Children>
    </RowWrapper>
  )
}

const RowWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const Children = styled(Box)`
  flex-grow: 1;
`

const LABEL_WIDTH = '140px'

const Title = styled(Text)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${LABEL_WIDTH};
`
