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
