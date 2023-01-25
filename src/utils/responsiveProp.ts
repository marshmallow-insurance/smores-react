const breakpointToMinPxMapping = {
  small: 0,
  medium: 768,
  large: 1024,
} satisfies Record<string, number>

type Breakpoint = keyof typeof breakpointToMinPxMapping
const breakpointList = Object.keys(breakpointToMinPxMapping) as Breakpoint[]

type PropByBreakpoint<PropValue> = { [key in Breakpoint]?: PropValue }
export type ResponsiveProp<PropValue> = PropValue | PropByBreakpoint<PropValue>

const isPropByBreakpoint = <PropValue>(
  value: ResponsiveProp<PropValue>,
): value is PropByBreakpoint<PropValue> => {
  return (
    typeof value === 'object' &&
    value !== null &&
    breakpointList.includes(Object.keys(value)[0] as any)
  )
}

export const resolveResponsiveProp = <PropValue>(
  value: ResponsiveProp<PropValue>,
  styleTemplate: (value: PropValue) => string,
) => {
  if (!isPropByBreakpoint(value)) {
    return `
      @media (min-width: ${breakpointToMinPxMapping.small}px) {
        ${styleTemplate(value)}
      }
    `
  }

  const breakpointUsed = Object.keys(value) as Breakpoint[]

  let style = ''
  breakpointUsed.forEach((breakpoint) => {
    style += `
        @media (min-width: ${breakpointToMinPxMapping[breakpoint]}px) {
          ${styleTemplate(value[breakpoint]!)}
        }
      `
  })

  return style
}
