import React from 'react'
import { Badge, type BadgeProps } from '../Badge/Badge'
import { Box } from '../Box'
import styled from 'styled-components'
import { Tooltip } from '../Tooltip'
import type { TooltipProps } from '../Tooltip/Tooltip'
import { Text } from '../Text'
import { theme } from '../theme'

type WithTooltip = Pick<TooltipProps, 'title' | 'content'> & {
  position?: TooltipProps['position']
}

export type BadgeListBadge = BadgeProps & { tooltip?: WithTooltip }

type Props = {
  size?: BadgeProps['size']
  limit?: number
  badges: Omit<BadgeListBadge, 'zIndex'>[]
}

export function BadgeList({ badges, limit, size }: Props) {
  const badgeZIndexMax = badges.length * 10 + 10
  const limitExcess =
    // TODO: off by one adjustments work, just hard to read, refactor for human eyes 👁️👄👁️
    limit && (badges.length + 1 > limit ? badges.length - limit + 1 : 0)

  return (
    <Container flex>
      {/* TODO: off by one adjustments work, just hard to read, refactor for human eyes 👁️👄👁️ */}
      {badges.slice(0, limit ? limit - 1 : undefined).map((badge, index) => (
        <WithTooltip
          key={typeof badge.src === 'string' ? badge.src : index}
          badge={{ ...badge, zIndex: badgeZIndexMax - index * 10, size }}
        />
      ))}

      {limitExcess !== undefined && Boolean(limitExcess) && (
        <Badge
          disabled
          borderColour="oatmeal"
          size={size}
          src={<ExcessBadge excess={limitExcess} />}
          zIndex={badgeZIndexMax}
        />
      )}
    </Container>
  )
}

type ExcessBadgeProps = {
  excess: number
}

function ExcessBadge({ excess }: ExcessBadgeProps) {
  return (
    <ExcessBadgeContainer>
      <Text typo="caption" style={{ fontWeight: 'bold' }}>
        +{excess}
      </Text>
    </ExcessBadgeContainer>
  )
}

const ExcessBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.oatmeal};
  pointer-events: none;
`

type WithTooltipProps = {
  badge: BadgeListBadge
}

const WithTooltip = ({ badge: { tooltip, ...badge } }: WithTooltipProps) => {
  if (tooltip) {
    return (
      <div style={{ zIndex: badge.zIndex }}>
        <Tooltip
          position={tooltip.position ?? 'bottom'}
          title={tooltip?.title}
          content={tooltip.content}
        >
          <Badge {...badge} />
        </Tooltip>
      </div>
    )
  }

  return <Badge {...badge} />
}

const Container = styled(Box)`
  & > * {
    transition: margin 0.2s ease-in-out;
    margin-right: -10px;
  }

  & > *:hover {
    margin-right: 5px;

    &:not(:first-child) {
      margin-left: 5px;
    }
  }
`
