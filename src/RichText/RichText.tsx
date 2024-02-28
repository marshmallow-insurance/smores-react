import React, { FC, ForwardedRef, forwardRef } from 'react'
import { MarginProps } from '../utils/space'
import { Box } from '../Box'
import domPurify from 'dompurify'
import styled from 'styled-components'
import { theme } from '../theme'
import { Icon } from '../Icon'

export interface RichTextProps extends MarginProps {
  htmlString: string
}

export const RichText = forwardRef(function RichText(
  {
    htmlString,
    ...props
  }: RichTextProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const sanitisedHtml = domPurify.sanitize(htmlString)

  if (!domPurify.isSupported) {
    return (
      <Box {...props}>
        <WarningText>
          <Icon render="warning" />
          Your browser is not supported, please upgrade to a newer version
        </WarningText>
        {htmlString}
      </Box>
    )
  } else {
    return (
      <HtmlBox ref={ref} {...props} dangerouslySetInnerHTML={{ __html: sanitisedHtml }} />
    )
  }
})

const WarningText = styled(Box)`
  background-color: ${theme.colors.sherbert};
  padding: 16px;
  border-radius: 16px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`

const HtmlBox = styled(Box)`
  * {
    all: revert;
  }
`
