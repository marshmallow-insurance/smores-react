// Events Types
export type GeneralEvent = Event | React.UIEvent
export type GenericEventCallback = (e: GeneralEvent) => unknown
export type KeyboardEventCallback = (e: KeyboardEvent) => unknown
export type MouseEventCallBack = (event: React.MouseEvent<HTMLElement>) => void
