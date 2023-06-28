import { useBannerContext } from './BannerContainer'

export const useBanner = () => {
  const { addBanner } = useBannerContext()

  return { addBanner }
}
