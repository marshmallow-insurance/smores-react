import {
  createContext,
  FC,
  useState,
  useCallback,
  ReactNode,
  useContext,
} from 'react'
import styled from 'styled-components'
import { BannerItem } from './BannerItem'
import { CreateBanner, Banner, BannerContextType } from './types'

export const BannerContext = createContext<BannerContextType>({
  addBanner: () => {
    throw new Error('Please add the BannerContainer to your application')
  },
})

export const useBannerContext = () => useContext(BannerContext)

export const BannerContainer: FC<{ children?: ReactNode }> = ({ children }) => {
  let bannerId = 0
  const [banner, setBanner] = useState<Banner[]>([])

  // create banner unique ID
  const newBannerId = useCallback(() => {
    const newId = `MM_BANNER_${bannerId}`
    bannerId++
    return newId
  }, [bannerId])

  const addBanner = (banner: CreateBanner) => {
    const newBanner = {
      ...banner,
      id: newBannerId(),
    }
    setBanner([newBanner])
  }

  const deleteBanner = (id: string) => {
    setBanner(banner.filter((banner) => banner.id !== id))
  }

  return (
    <BannerContext.Provider
      value={{
        addBanner,
      }}
    >
      {children}
      <BannerWrapper>
        {banner.map((banner) => (
          <BannerItem key={banner.id} {...banner} deleteBanner={deleteBanner} />
        ))}
      </BannerWrapper>
    </BannerContext.Provider>
  )
}

const BannerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99;
`
