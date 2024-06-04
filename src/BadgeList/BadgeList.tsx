import React from 'react'
import { Badge, type BadgeProps } from '../Badge/Badge'
import { Box } from '../Box'
import styled from 'styled-components'
import { Tooltip } from '../Tooltip'
import type { TooltipProps } from '../Tooltip/Tooltip'

type BadgeWithTooltip = Pick<TooltipProps, 'title' | 'content'> & {
  position?: TooltipProps['position']
}

type UnionBadge = BadgeProps & { tooltip?: BadgeWithTooltip }

type Props = {
  badges: Omit<UnionBadge, 'zIndex'>[]
}

export function BadgeList({ badges }: Props) {
  const badgeZIndexMax = badges.length * 10 + 10

  return (
    <Container flex>
      {badges.map((badge, index) => (
        <WithTooltip
          key={badge.src}
          badge={{ ...badge, zIndex: badgeZIndexMax - index * 10 }}
        />
      ))}
    </Container>
  )
}

type WithTooltipProps = {
  badge: UnionBadge
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
          <Badge key={badge.src} {...badge} />
        </Tooltip>
      </div>
    )
  }

  return <Badge key={badge.src} {...badge} />
}

const Container = styled(Box)`
  & > * {
    transition: margin-right 0.2s ease-in-out;
    margin-right: -10px;
  }

  &:hover {
    & > * {
      margin-right: 5px;
    }
  }
`
