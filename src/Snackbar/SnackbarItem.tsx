import { Box } from '../Box'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { theme } from '../theme'
import { Text } from '../Text'
import { Snackbar } from './types'
import { useTimeout } from '../hooks'

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
          <Icon mr="12px" render={leadingIcon} size={24} color="cream" />
        )}
        <Text typo="desc-small" color="cream">
          {message}
        </Text>
      </Box>
      {canManuallyClose && (
        <CloseButton
          onClick={() => deleteSnack(id)}
          aria-label={`close snackbar ${message}`}
        >
          {showCloseIcon ? (
            <Icon render="cross" size={16} color="cream" />
          ) : (
            <UnderlinedText tag="span" typo="desc-medium" color="cream">
              Dismiss
            </UnderlinedText>
          )}
        </CloseButton>
      )}
    </SnackItem>
  )
}

const SnackItem = styled(Box)`
  border-radius: 10px;
  background-color: ${theme.colors.liquorice};
`

const CloseButton = styled.button`
  cursor: pointer;
`

const UnderlinedText = styled(Text)`
  text-decoration: underline;
`
