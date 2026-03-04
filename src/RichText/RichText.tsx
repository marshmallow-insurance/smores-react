import domPurify from 'dompurify'
import { ForwardedRef, forwardRef } from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { MarginProps } from '../utils/space'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@awesome.me/kit-46ca99185c/icons/classic/regular'
import { IconContainer } from '../sharedStyles/shared.styles'

export interface RichTextProps extends MarginProps {
  htmlString: string
}

export const RichText = forwardRef(function RichText(
  { htmlString, ...props }: RichTextProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const sanitisedHtml = domPurify.sanitize(htmlString)

  if (!domPurify.isSupported) {
    return (
      <Box {...props}>
        <WarningText>
          <IconContainer $size={24}>
            <FontAwesomeIcon icon={faWarning} />
          </IconContainer>
          Your browser is not supported, please upgrade to a newer version
        </WarningText>
        {htmlString}
      </Box>
    )
  } else {
    return (
      <HtmlBox
        ref={ref}
        {...props}
        dangerouslySetInnerHTML={{ __html: sanitisedHtml }}
      />
    )
  }
})

const WarningText = styled(Box)`
  background-color: ${({ theme }) => theme.color.feedback.negative[200]};
  padding: ${({ theme }) => theme.space[200]};
  border-radius: 16px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[200]};
  margin-bottom: ${({ theme }) => theme.space[200]};
`

const HtmlBox = styled(Box)`
  * {
    all: revert;
  }
`
