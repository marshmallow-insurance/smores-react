import { useEffect } from 'react'

export const useScript = ({
  url,
  async = true,
}: {
  url: string
  async: boolean
}) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = async

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}
