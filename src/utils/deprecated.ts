import { useEffect } from 'react'

type Env = 'development' | 'production' | 'local'

const detectEnv = (): Env => {
  const env =
    (typeof process !== 'undefined' && process?.env?.REACT_APP_NODE_ENV) ||
    (typeof process !== 'undefined' && process?.env?.NODE_ENV)

  if (env === 'development' || env === 'production' || env === 'local')
    return env
  return 'production'
}

export const isLocal = detectEnv() === 'local'

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
  enabled?: boolean
  title: string
  message: string
  componentProps?: Record<string, any>
}

export const useDeprecatedWarning = ({
  enabled = true,
  title,
  message,
  componentProps,
}: UseDeprecatedWarningParams): void => {
  useEffect(() => {
    if (isLocal && enabled) {
      const logs: any[] = [
        `%c[Deprecated] ${title}`,
        'font-weight:bold;',
        '\n',
        '\n',
        message,
      ]

      if (componentProps) {
        logs.push(
          '\n',
          '\n',
          'Component props:',
          stripUndefinedProps(componentProps),
        )
      }

      console.warn(...logs)
    }
  }, [enabled])
}
