import { FC, ReactElement, ReactNode, useMemo } from 'react'
import styled, { css } from 'styled-components'

import { useUniqueId } from '../utils/id'
import { MarginProps, TransientMarginProps, margin } from '../utils/space'
import { ErrorMessage } from './components/ErrorMessage'
import { CheckboxCardGroupContext } from './context'

export type CheckboxCardGroupProps = {
  className?: string
  /** The `CheckboxCard`s in the group */
  children: ReactNode
  /** Title of the group. It is the accessible name of the group */
  label?: string
  /** `true` shows the label as a form title, `false` as a small group label */
  renderAsTitle?: boolean
  /** Description under the form title. Not shown with a small group label */
  assistiveText?: string | ReactElement
  /** Show every card in the group as invalid */
  error?: boolean
  /** Message shown under the cards when the group is invalid */
  errorMsg?: string
} & MarginProps

export const CheckboxCardGroup: FC<CheckboxCardGroupProps> = ({
  children,
  label,
  renderAsTitle = true,
  assistiveText,
  error = false,
  errorMsg,
  className,
  m,
  mx,
  my,
  ml,
  mr,
  mt,
  mb,
}) => {
  const id = useUniqueId()
  const assistiveTextId = `${id}-assistive-text`
  const errorMsgId = `${id}-error`

  const showAssistiveText = Boolean(label && renderAsTitle && assistiveText)
  const showErrorMsg = error && Boolean(errorMsg)

  const contextValue = useMemo(
    () => ({ error, errorMsgId: showErrorMsg ? errorMsgId : undefined }),
    [error, errorMsgId, showErrorMsg],
  )

  return (
    <Group
      className={className}
      aria-describedby={showAssistiveText ? assistiveTextId : undefined}
      $m={m}
      $mx={mx}
      $my={my}
      $ml={ml}
      $mr={mr}
      $mt={mt}
      $mb={mb}
    >
      {/* The legend names the group only as the first child of the fieldset */}
      {label &&
        (renderAsTitle ? (
          <Title $hasAssistiveText={showAssistiveText}>{label}</Title>
        ) : (
          <GroupLabel>{label}</GroupLabel>
        ))}
      {showAssistiveText && (
        <AssistiveText id={assistiveTextId}>{assistiveText}</AssistiveText>
      )}
      <Cards>
        <CheckboxCardGroupContext.Provider value={contextValue}>
          {children}
        </CheckboxCardGroupContext.Provider>
        {showErrorMsg && (
          <ErrorMessage id={errorMsgId}>{errorMsg}</ErrorMessage>
        )}
      </Cards>
    </Group>
  )
}

// The library ships no CSS reset, so remove the browser's fieldset styles
const Group = styled.fieldset<TransientMarginProps>`
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;

  ${margin}
`

const legendReset = css`
  display: block;
  width: 100%;
  padding: 0;
`

const Title = styled.legend<{ $hasAssistiveText: boolean }>(
  ({ theme, $hasAssistiveText }) => css`
    ${legendReset}
    margin-bottom: ${$hasAssistiveText ? theme.space['050'] : theme.space[200]};
    font-size: ${theme.font.heading[300].fontSize};
    font-weight: ${theme.font.heading[300].fontWeight};
    line-height: ${theme.font.heading[300].lineHeight};
    color: ${theme.color.text.base};
  `,
)

const GroupLabel = styled.legend(
  ({ theme }) => css`
    ${legendReset}
    margin-bottom: ${theme.space[200]};
    font-size: ${theme.font.label[100].fontSize};
    font-weight: ${theme.font.label[100].fontWeight};
    line-height: ${theme.font.label[100].lineHeight};
    text-transform: uppercase;
    color: ${theme.color.text.base};
  `,
)

const AssistiveText = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.space[200]};
    font-size: ${theme.font.body[200].fontSize};
    font-weight: ${theme.font.body[200].fontWeight};
    line-height: ${theme.font.body[200].lineHeight};
    color: ${theme.color.text.base};
  `,
)

const Cards = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[150]};
  `,
)
