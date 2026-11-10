import { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@awesome.me/kit-46ca99185c/icons/classic/solid'

type ErrorMessageProps = {
  id?: string
  children: ReactNode
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ id, children }) => (
  <Container id={id}>
    <IconContainer aria-hidden="true">
      <FontAwesomeIcon icon={faCircleExclamation} />
    </IconContainer>
    <span>{children}</span>
  </Container>
)

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: ${theme.space['050']};
    font-size: ${theme.font.caption[100].fontSize};
    font-weight: ${theme.font.caption[100].fontWeight};
    line-height: ${theme.font.caption[100].lineHeight};
    color: ${theme.color.feedback.negative[200]};
  `,
)

// Figma icons use Font Awesome's square bounding box, in which the glyph's
// em height is 80% of the box
const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;

  svg {
    width: 100%;
    height: 80%;
    overflow: visible;
  }
`
