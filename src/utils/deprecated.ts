import { useEffect } from 'react'

const env = process.env.REACT_APP_NODE_ENV || process.env.ENV

export const isLocal = env === 'local'

const stripUndefinedProps = (props: Record<string, unknown>) => {
  const propKeys = Object.keys(props)

  return propKeys.reduce<Record<string, unknown>>((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key]
    }
    return acc
  }, {})
}

type UseDeprecatedWarningParams = {
  enabled: boolean
  componentName: string
  message: string
  componentProps: Record<string, any>
}

export const useDeprecatedWarning = ({
  enabled,
  componentName,
  message,
  componentProps,
}: UseDeprecatedWarningParams): void => {
  useEffect(() => {
    if (isLocal && enabled) {
      console.warn(
        `%c[Deprecated] Impacted component: ${componentName}`,
        'font-weight:bold;',
        '\n',
        '\n',
        message,
        '\n',
        '\n',
        'Component props:',
        stripUndefinedProps(componentProps),
      )
    }
  }, [enabled])
}
