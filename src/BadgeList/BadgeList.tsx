import React from 'react'
import { Badge, BadgeSize, type BadgeProps } from '../Badge/Badge'
import styled from 'styled-components'
import { Tooltip } from '../Tooltip'
import type { TooltipProps } from '../Tooltip/Tooltip'
import { Text } from '../Text'

type WithTooltip = Pick<TooltipProps, 'title' | 'content'> & {
  position?: TooltipProps['position']
}

export type BadgeListBadge = BadgeProps & { tooltip?: WithTooltip }

type Props = {
  size?: BadgeProps['size']
  limit?: number
  badges: Omit<BadgeListBadge, 'zIndex'>[]
}

/**
 * ### A list of badges with optional tooltips
 *
 * @param limit - The maximum number of badges to display. If the number of badges exceeds the limit, a badge will be displayed indicating the number of hidden excess badges.
 *
 */
export function BadgeList({ badges, limit, size = BadgeSize.Lg }: Props) {
  const badgeZIndexMax = badges.length
  const limitExcess =
    // TODO: off by one adjustments work, just hard to read, refactor for human eyes 👁️👄👁️
    limit && (badges.length > limit ? badges.length - limit : 0)

  const maxBadges = limit ? limit - 1 : undefined
  const showExcessBadge = limitExcess !== undefined && Boolean(limitExcess)

  return (
    <Container $size={size}>
      {badges
        .slice(0, limitExcess ? maxBadges : undefined)
        .map((badge, index) => (
          <WithTooltip
            key={typeof badge.src === 'string' ? badge.src : index}
            badge={{
              ...badge,
              zIndex: badgeZIndexMax - index,
              size,
            }}
          />
        ))}

      {showExcessBadge && (
        <div
          className="limit-badge"
          style={{ zIndex: badgeZIndexMax, marginLeft: '4px' }}
        >
          <Badge
            title={`+${limitExcess}`}
            borderColour="oatmeal"
            size={size}
            src={<ExcessBadge excess={limitExcess + 1} />}
            disabled
          />
        </div>
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
  background-color: ${({ theme }) => theme.color.background[200]};
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

  return (
    <div style={{ zIndex: badge.zIndex }}>
      <Badge {...badge} />
    </div>
  )
}

const marginRightMapping = {
  [BadgeSize.Lg]: '-18px',
  [BadgeSize.Md]: '-14px',
  [BadgeSize.Sm]: '-11px',
} satisfies Record<BadgeSize, string>

const Container = styled.div<{ $size: BadgeSize }>`
  display: flex;

  > * {
    transition:
      margin 0.2s ease-in-out,
      padding 0.2s ease-in-out;
    margin-right: ${(props) => marginRightMapping[props.$size]};

    &:hover:not(:first-child):not(.limit-badge) {
      padding-left: 10px;
      &:not(:last-child) {
        padding-right: 5px;
      }
    }
  }
`
