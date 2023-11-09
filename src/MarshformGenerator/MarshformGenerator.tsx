import React, { FC } from 'react'
import { Box } from '../Box'

import { EmotionPosition } from './EmotionWrapper'
import { MarshformWrapper } from './MarshformWrapper'

export type Emotion =
  | 'focussed'
  | 'sugar-rush'
  | 'disappointed'
  | 'suspicious'
  | 'curious'
  | 'blank'
  | 'exhausted'
  | 'happy'
  | 'sleeping'
  | 'tired'

export type Marshform =
  | 'meter'
  | 'crest'
  | 'bumper'
  | 'semiCircle'
  | 'document'
  | 'losenge'
  | 'warning'
  | 'circle'
  | 'pointer'
  | 'arch'
  | 'arrow'
  | 'hexagon'
  | 'van'
  | 'car'
  | 'house'
  | 'eggTimer'

export type MarshformColor =
  | 'blueberry'
  | 'caramel'
  | 'spearmint'
  | 'pistachio'
  | 'marzipan'
  | 'marshmallowPink'

const MarshformProperties: { [key in Marshform]: { scale: number } } = {
  meter: { scale: 1 },
  crest: { scale: 1 },
  bumper: { scale: 1 },
  semiCircle: { scale: 1 },
  document: { scale: 1.5 },
  losenge: { scale: 1 },
  warning: { scale: 1 },
  circle: { scale: 1 },
  pointer: { scale: 0.5 },
  arch: { scale: 1 },
  arrow: { scale: 1 },
  hexagon: { scale: 1 },
  van: { scale: 1 },
  car: { scale: 1 },
  house: { scale: 1 },
  eggTimer: { scale: 1.5 },
}

export interface MarshformGeneratorProps {
  width?: number
  emotion?: Emotion
  tiers?: 1 | 2 | 3 | 4
  firstColor?: MarshformColor
  secondColor?: MarshformColor
  thirdColor?: MarshformColor
  fourthColor?: MarshformColor
  firstShape?: Marshform
  secondShape?: Marshform
  thirdShape?: Marshform
  fourthShape?: Marshform
  selectedEmotionTier?: 1 | 2 | 3 | 4
}

const normalishDistribution = () => {
  return (
    Math.round(Math.random()) +
    2 +
    Math.round((Math.random() * 2 - 1) * Math.random())
  )
}

const randomEmotion = () => {
  const emotionArray = [
    'focussed',
    'sugar-rush',
    'disappointed',
    'suspicious',
    'blank',
    'exhausted',
    'happy',
    'sleeping',
    'tired',
  ]
  return emotionArray[
    Math.floor(Math.random() * emotionArray.length)
  ] as Emotion
}

const randomEmotionPosition = (shape: Marshform) => {
  const emotionPositionArray = ['top', 'bottom', 'left', 'right', 'center']
  const pointerPositionArray = ['top', 'left', 'right', 'center']
  const warningPositionArray = ['center', 'bottom']
  const semiCirclePositionArray = ['center', 'bottom', 'top']
  if (shape === 'eggTimer') {
    return emotionPositionArray[
      Math.floor(Math.random() * 2)
    ] as EmotionPosition
  }
  if (shape === 'crest') {
    return emotionPositionArray[
      Math.floor(Math.random() * 3) + 2
    ] as EmotionPosition
  }
  if (shape === 'warning') {
    return warningPositionArray[
      Math.floor(Math.random() * 2)
    ] as EmotionPosition
  }
  if (shape === 'house') {
    return emotionPositionArray[
      Math.floor(Math.random() * 4) + 1
    ] as EmotionPosition
  }
  if (shape === 'semiCircle') {
    return semiCirclePositionArray[
      Math.floor(Math.random() * 3)
    ] as EmotionPosition
  }
  if (shape === 'pointer') {
    return pointerPositionArray[
      Math.floor(Math.random() * 4)
    ] as EmotionPosition
  }
  return emotionPositionArray[
    Math.floor(Math.random() * emotionPositionArray.length)
  ] as EmotionPosition
}

export const shapeArray = [
  'meter',
  'crest',
  'bumper',
  'semiCircle',
  'document',
  'losenge',
  'warning',
  'circle',
  'pointer',
  'arch',
  'arrow',
  'hexagon',
  'house',
  'eggTimer',
]

const randomShape = (): Marshform => {
  return shapeArray[Math.floor(Math.random() * shapeArray.length)] as Marshform
}

const calculateWidths = (width: number, shapes: Marshform[]) => {
  const randomScales = shapes
    .map((shape) => Math.random() * MarshformProperties[shape].scale)
    .map((scale) => (scale < 0.3 ? 0.5 : scale))
  const biggestScale = Math.max(...randomScales)
  const ratio = width / biggestScale

  return randomScales.map((scale) => scale * ratio)
}

export const availableColoursArray = [
  'blueberry',
  'caramel',
  'spearmint',
  'pistachio',
  'marzipan',
  'marshmallowPink',
]

export const MarshformGenerator: FC<MarshformGeneratorProps> = ({
  width = 200,
  emotion,
  tiers,
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
  firstShape,
  secondShape,
  thirdShape,
  fourthShape,
  selectedEmotionTier,
}) => {
  const marshformTiers = tiers || normalishDistribution()
  const emotionTier = selectedEmotionTier
    ? selectedEmotionTier - 1
    : Math.floor(Math.random() * marshformTiers)
  const marshforms = Array.from({ length: marshformTiers }).map(() =>
    randomShape(),
  )

  // if there are any selected colours, dedupe them from the random colours
  const dedupeSelectedColours = () => {
    const colourArray = [
      'blueberry',
      'caramel',
      'spearmint',
      'pistachio',
      'marzipan',
      'marshmallowPink',
    ]

    const dedupedSelectedColours = colourArray.filter(
      (color) =>
        color !== firstColor &&
        color !== secondColor &&
        color !== thirdColor &&
        color !== fourthColor,
    )

    return dedupedSelectedColours
  }

  const dedupeRandomColours = () => {
    const colourArray = dedupeSelectedColours()

    const colour1 =
      firstColor ??
      (colourArray[
        Math.floor(Math.random() * colourArray.length)
      ] as MarshformColor)
    if (colourArray.includes(colour1))
      colourArray.splice(colourArray.indexOf(colour1), 1)
    const colour2 =
      secondColor ??
      (colourArray[
        Math.floor(Math.random() * colourArray.length)
      ] as MarshformColor)
    if (colourArray.includes(colour2))
      colourArray.splice(colourArray.indexOf(colour2), 1)
    const colour3 =
      thirdColor ??
      (colourArray[
        Math.floor(Math.random() * colourArray.length)
      ] as MarshformColor)
    if (colourArray.includes(colour3))
      colourArray.splice(colourArray.indexOf(colour3), 1)
    const colour4 =
      fourthColor ??
      (colourArray[
        Math.floor(Math.random() * colourArray.length)
      ] as MarshformColor)

    return [colour1, colour2, colour3, colour4]
  }

  const marshformWidths = calculateWidths(width, marshforms)
  const marshformColours = dedupeRandomColours()

  return (
    <Box>
      <Box flex direction="column" alignItems="center" width={width + 'px'}>
        {marshformTiers > 3 && (
          <MarshformWrapper
            width={marshformWidths[3]}
            shape={fourthShape ?? marshforms[3]}
            color={marshformColours[3]}
            emotion={
              emotionTier === 3
                ? emotion
                  ? emotion
                  : randomEmotion()
                : undefined
            }
            emotionPosition={
              emotionTier === 3
                ? randomEmotionPosition(marshforms[3])
                : undefined
            }
          />
        )}
        {marshformTiers > 2 && (
          <MarshformWrapper
            width={marshformWidths[2]}
            shape={thirdShape ?? marshforms[2]}
            color={marshformColours[2]}
            emotion={
              emotionTier === 2
                ? emotion
                  ? emotion
                  : randomEmotion()
                : undefined
            }
            emotionPosition={
              emotionTier === 2
                ? randomEmotionPosition(marshforms[2])
                : undefined
            }
          />
        )}
        {marshformTiers > 1 && (
          <MarshformWrapper
            width={marshformWidths[1]}
            shape={secondShape ?? marshforms[1]}
            color={marshformColours[1]}
            emotion={
              emotionTier === 1
                ? emotion
                  ? emotion
                  : randomEmotion()
                : undefined
            }
            emotionPosition={
              emotionTier === 1
                ? randomEmotionPosition(marshforms[1])
                : undefined
            }
          />
        )}
        <MarshformWrapper
          width={marshformTiers === 1 ? width : marshformWidths[0]}
          shape={firstShape ?? marshforms[0]}
          color={marshformColours[0]}
          emotion={
            emotionTier === 0
              ? emotion
                ? emotion
                : randomEmotion()
              : undefined
          }
          emotionPosition={
            emotionTier === 0 || marshformTiers === 1
              ? randomEmotionPosition(marshforms[0])
              : undefined
          }
        />
      </Box>
    </Box>
  )
}
