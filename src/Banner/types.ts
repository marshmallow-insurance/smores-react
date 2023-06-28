export interface Banner {
  id: string
  message: string
  type: 'upsell' | 'critical' | 'general' | 'success'
  topOffset: string
  exploreAction?: () => void
  showExploreText?: boolean
  showExploreIcon?: boolean
  autoCloseTime?: 4 | 5 | 6 | 7 | 8 | 9 | 10
  leadingIcon?: string
  canManuallyClose?: boolean
  showCloseIcon?: boolean
}

export type CreateBanner = Omit<Banner, 'id'>

export interface BannerContextType {
  addBanner: (banner: CreateBanner) => void
}
