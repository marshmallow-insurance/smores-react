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
  document: { scale: 2 },
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
  eggTimer: { scale: 2 },
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

const randomEmotionPosition = () => {
  const emotionPositionArray = ['top', 'bottom', 'left', 'right', 'center']
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
    .map((scale) => (scale < 0.3 ? 0.3 : scale))
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

export const dedupeRandomColours = () => {
  const colourArray = [
    'blueberry',
    'caramel',
    'spearmint',
    'pistachio',
    'marzipan',
    'marshmallowPink',
  ]
  const colour1 = colourArray[
    Math.floor(Math.random() * colourArray.length)
  ] as MarshformColor
  colourArray.splice(colourArray.indexOf(colour1), 1)
  const colour2 = colourArray[
    Math.floor(Math.random() * colourArray.length)
  ] as MarshformColor
  colourArray.splice(colourArray.indexOf(colour2), 1)
  const colour3 = colourArray[
    Math.floor(Math.random() * colourArray.length)
  ] as MarshformColor
  colourArray.splice(colourArray.indexOf(colour3), 1)
  const colour4 = colourArray[
    Math.floor(Math.random() * colourArray.length)
  ] as MarshformColor
  return [colour1, colour2, colour3, colour4]
}

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
  console.log('marshforms: ', marshforms)

  const marshformWidths = calculateWidths(width, marshforms)
  const marshformColours = dedupeRandomColours()

  return (
    <Box>
      <Box flex direction="column" alignItems="center" width={width + 'px'}>
        {marshformTiers > 3 && (
          <MarshformWrapper
            width={marshformWidths[3]}
            shape={fourthShape ?? marshforms[3]}
            color={fourthColor ?? marshformColours[3]}
            emotion={
              emotionTier === 3
                ? emotion
                  ? emotion
                  : randomEmotion()
                : undefined
            }
            emotionPosition={
              emotionTier === 3 ? randomEmotionPosition() : undefined
            }
          />
        )}
        {marshformTiers > 2 && (
          <MarshformWrapper
            width={marshformWidths[2]}
            shape={thirdShape ?? marshforms[2]}
            color={thirdColor ?? marshformColours[2]}
            emotion={
              emotionTier === 2
                ? emotion
                  ? emotion
                  : randomEmotion()
                : undefined
            }
            emotionPosition={
              emotionTier === 2 ? randomEmotionPosition() : undefined
            }
          />
        )}
        {marshformTiers > 1 && (
          <MarshformWrapper
            width={marshformWidths[1]}
            shape={secondShape ?? marshforms[1]}
            color={secondColor ?? marshformColours[1]}
            emotion={
              emotionTier === 1
                ? emotion
                  ? emotion
                  : randomEmotion()
                : undefined
            }
            emotionPosition={
              emotionTier === 1 ? randomEmotionPosition() : undefined
            }
          />
        )}
        <MarshformWrapper
          width={marshformTiers === 1 ? width : marshformWidths[0]}
          shape={firstShape ?? marshforms[0]}
          color={firstColor ?? marshformColours[0]}
          emotion={
            emotionTier === 0
              ? emotion
                ? emotion
                : randomEmotion()
              : undefined
          }
          emotionPosition={
            emotionTier === 0 ? randomEmotionPosition() : undefined
          }
        />
      </Box>
    </Box>
  )
}
