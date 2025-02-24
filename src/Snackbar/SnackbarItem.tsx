import React, { FC } from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { useTimeout } from '../hooks'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { theme } from '../theme'
import { Snackbar } from './types'

interface Props extends Snackbar {
  deleteSnack: (id: string) => void
}

export const SnackbarItem: FC<Props> = ({
  autoCloseTime = 4,
  id,
  message,
  leadingIcon,
  canManuallyClose,
  showCloseIcon,
  deleteSnack,
}) => {
  useTimeout(() => deleteSnack(id), autoCloseTime * 1000)

  return (
    <SnackItem p="16px" key={id} mt="16px" flex justifyContent="space-between">
      <Box flex alignItems="center">
        {leadingIcon && (
          <Icon mr="12px" render={leadingIcon} size={24} color="mascarpone" />
        )}
        <Text typo="body-small" color="mascarpone">
          {message}
        </Text>
      </Box>
      {canManuallyClose && (
        <CloseButton
          onClick={() => deleteSnack(id)}
          aria-label={`close snackbar ${message}`}
        >
          {showCloseIcon ? (
            <Icon render="cross" size={16} color="mascarpone" />
          ) : (
            <UnderlinedText tag="span" typo="headline-small" color="mascarpone">
              Dismiss
            </UnderlinedText>
          )}
        </CloseButton>
      )}
    </SnackItem>
  )
}

const SnackItem = styled(Box)`
  border-radius: 16px;
  background-color: ${theme.colors.liquorice};
`

const CloseButton = styled.button`
  cursor: pointer;
`

const UnderlinedText = styled(Text)`
  text-decoration: underline;
`
