import React, { useState } from 'react'
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

  const maxBadges = limit ? limit - 1 : undefined

  return (
    <Container flex>
      {/* TODO: off by one adjustments work, just hard to read, refactor for human eyes 👁️👄👁️ */}
      {badges.slice(0, maxBadges).map((badge, index) => (
        <WithTooltip
          key={typeof badge.src === 'string' ? badge.src : index}
          badge={{
            ...badge,
            zIndex: badgeZIndexMax - index * 10,
            size,
          }}
        />
      ))}

      {limitExcess !== undefined && Boolean(limitExcess) && (
        <Badge
          borderColour="oatmeal"
          size={size}
          src={<ExcessBadge excess={limitExcess} />}
          zIndex={badgeZIndexMax}
          disabled
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
  const [hovered, setHover] = useState(false)

  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)

  const classNames = [hovered ? 'hovered' : ''].join(' ')

  if (tooltip) {
    return (
      <div
        className={classNames}
        style={{ zIndex: badge.zIndex }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
    <div
      className={classNames}
      style={{ zIndex: badge.zIndex }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Badge {...badge} />
    </div>
  )
}

const Container = styled(Box)`
  & > * {
    transition: margin 0.2s ease-in-out, padding 0.2s ease-in-out;
    margin-right: -15px;
  }

  &:hover > *.hovered:not(:first-child) {
    padding-left: 10px;
    &:not(:last-child) {
      padding-right: 0px;
    }
  }
`
